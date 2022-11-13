import { Component } from '@angular/core';

import { onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from '../service/autservice.service';
import { StorageService } from '../service/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLoged : any = false;

  constructor( private authService: AuthService,
    private router: Router,
    private storageService: StorageService) {
      onAuthStateChanged(this.authService.getStateAuth(), user=>{
        if(user!=null && user != undefined){
          this.isLoged = true;
        }
      });

    }

    onLogout(){
      signOut(this.authService.getStateAuth()).then(response=>{
        console.log("Logout!");
        this.router.navigateByUrl('/login');
        this.storageService.limpiarStorage();
      }).catch(error=>{
  
      });
    }
}
