import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvioReceptorService } from '../service/envio-reciever.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user = {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: any[]=
  [
    {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {nombre:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"}
  ];
  constructor(private router: Router,
    private serviceCService: EnvioReceptorService) {}

  ngOnInit(

  ) {

  }
      gotReceiver(){

        this.serviceCService.sendObjectSource(this.user);
    this.serviceCService.sendListSource(this.list);

    this.router.navigate(['main/receptor']);
      }
}