import { Component, OnInit } from '@angular/core';
import { EnvioReceptorService } from '../services/envio-receptor.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private envioReceptor: EnvioReceptorService) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/receptor']);
  }

}
