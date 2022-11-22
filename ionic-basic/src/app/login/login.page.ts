import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ModalErrorComponent } from '../componentes/modal-error/modal-error.component';
import { ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from '../service/autservice.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  ionicForm: FormGroup;
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private autSvc: AuthService,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.ionicForm.controls[controlName].valid &&
			this.ionicForm.controls[controlName].hasError(errorName) &&
			this.ionicForm.controls[controlName].touched;
	}


	notZero(control: AbstractControl) {
		if (control.value && control.value.monto <= 0) {
			return { 'notZero': true };
		}
		return null;
	} 

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        
        console.log('Successfully logged in!');
        this.loadingController.dismiss();
        this.router.navigate(['main/presupuesto']);
      }
      else{
        this.loadingController.dismiss();
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            this.openModal(user);
          }
        }
      }
    }).catch((error: any)=>{
      this.loadingController.dismiss();
      this.openModal(error);
    })

  }

  submitForm(){
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.presentLoadingWithOptions();
      this.onLogin();
    }
  }
  
  ionViewWillEnter(){
    this.ionicForm.reset();
  }

  async openModal(user: any){
    const modal = await this.modalCtrl.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Ingres password y/o contraseña'
      }
    });
    return await modal.present();
  }

  buildForm(){
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
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
