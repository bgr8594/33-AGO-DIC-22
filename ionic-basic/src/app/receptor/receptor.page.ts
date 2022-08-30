import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { EnvioReceptorService } from '../service/envio-receptor.service';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {

  user: any;
  list: any[];
  personajes: Personaje[];

  constructor(private envioReceptorService: EnvioReceptorService) { }

  ngOnInit() {
    this.envioReceptorService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    }).unsubscribe();
    this.envioReceptorService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    }).unsubscribe();

    this.envioReceptorService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });
  }

}
