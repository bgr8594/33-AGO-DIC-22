import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage {

  constructor() {}

  Sama(){
    document.getElementById("testText").textContent = "Te quiero mucho";
    console.log("Sama");
  }

}
