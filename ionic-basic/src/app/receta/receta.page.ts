import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from '../models/receta.model';
import { RecetaService } from '../service/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetas: Receta[] | undefined;

  constructor(private recetaService: RecetaService,
    private router: Router) {

  this.ngOnInit(); {
    this.recetas = this.recetaService.getRecetas();
  }

  irDetalleReceta(id, number);{
    this.router.navigate([`main/detalle-receta/${id}`]);
  }
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
function irDetalleReceta(id: any, number: any) {
  throw new Error('Function not implemented.');
}


