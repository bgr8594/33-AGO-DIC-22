import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-segment-button',
  templateUrl: './segment-button.page.html',
  styleUrls: ['./segment-button.page.scss'],
})
export class SegmentButtonPage implements OnInit {

  usuario: any = {};
  constructor(private storage: StorageService) { }

  ngOnInit() {
     this.storage.setValue('usuario',
     {nombre:'bgr nombre', direccion:'Jose Silvestre aramberri'})
     this.getUsuario();
  }

  getUsuario(){
    this.storage.getValue('usuario').
    then(user=>{
      this.usuario = user;
    }).
    catch(error=>{
      console.error(error);
    });
  }
}
