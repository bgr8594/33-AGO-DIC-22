import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from '../models/receta.model';
import { RecetaService } from '../services/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetas: Receta[];

  constructor(private recetaService: RecetaService,
  private router: Router) {
  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

  irDetalleReceta(id: number){
    this.router.navigate([`main/detalle-receta/${id}`]);
  }
}
