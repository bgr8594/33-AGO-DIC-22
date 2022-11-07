import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/autservice.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalErrorComponent } from '../componentes/modal-error/modal-error.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();
  formRegister : FormGroup;
  constructor(
    private autSvc: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private loadingController: LoadingController
    ) {
      this.buildForm();
      this.formRegister.reset()
     }

  ngOnInit() {
    this.formRegister.reset();
  }


  submitForm(){
    if(this.formRegister.valid){
      this.user.email = this.formRegister.get('email').value;
      this.user.password = this.formRegister.get('password').value;
      this.presentLoadingWithOptions();
      this.onRegister();
    }
  }

  ionViewWillEnter(){
    this.formRegister.reset();
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        this.loadingController.dismiss();
        console.log('Successfully created user!');
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      this.loadingController.dismiss();
      if(error.code =='auth/email-already-in-use'){
        this.openModal(error);
      }
      console.log(error.code);
    })

  } 

  hasError: any = (controlName: string, errorName: string) => {
		return !this.formRegister.controls[controlName].valid &&
			this.formRegister.controls[controlName].hasError(errorName) &&
			this.formRegister.controls[controlName].touched;
	}

  buildForm(){
    this.formRegister = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }

  
  async openModal(user: any){
    const modal = await this.modalCtrl.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Error al crear el usuario'
      }
    });
    return await modal.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //spinner: null,
      //duration: 5000,
      message: 'Iniciando sesión...',
      translucent: true,
      //cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}
