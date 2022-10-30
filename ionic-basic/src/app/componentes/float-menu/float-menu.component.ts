import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuElement } from 'src/app/models/menu.model';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/autservice.service';
import { MenuServiceService } from 'src/app/service/menu-service.service';
import { Subscription } from 'rxjs';
import { onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit, OnDestroy {

  titleMenu: string='home';

  public isLoged : any = false;

  public subscription : Subscription;

  datosMenu: MenuElement[] =[
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];
  constructor(
    private autService: AuthService,
    private menuService: MenuServiceService,
    private router: Router) { 
      onAuthStateChanged(this.autService.getStateAuth(), user=>{
        if(user!=null && user != undefined){
          this.isLoged = true;
        }
      });

    this.subscription = this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });

    }

    ngOnDestroy(): void {
      if(this.subscription != null || this.subscription!= undefined){
        this.subscription.unsubscribe();
      }
    }

    ngOnInit() {}

    navegar(link: string, titleMenu: string){
      this.titleMenu =titleMenu;
      this.router.navigate([link]);
    }

    onMenuOpen(){
      onAuthStateChanged(this.autService.getStateAuth(), user=>{
        if(user!=null && user != undefined){
          this.datosMenu =[
            {nombre: 'Alumnos',enlace:'/alumnos',
      icono:'school-outline'},
        {nombre: 'Receteas',enlace:'/receta',
        icono:'restaurant-outline'},
        {nombre: 'inicio',enlace:'/inicio',
        icono:'navigate-outline'},
        {nombre: 'Tabs',enlace:'/tabs',
        icono:'folder-outline'},
        {nombre: 'login',enlace:'/login',
        icono:'log-in-outline'},
            {nombre: 'logout',enlace:'/home',
            icono:'log-out-outline'}
          ];
  
        }       
       else{
          this.datosMenu =[
            {nombre: 'login',enlace:'/login',
            icono:'log-in-outline'},
            {nombre: 'logout',enlace:'/home',
            icono:'log-out-outline'}
          ];
        }
      });
    }

}