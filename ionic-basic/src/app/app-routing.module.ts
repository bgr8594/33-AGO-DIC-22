import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'detalle-receta',
    loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule)
  },
  {
    path: 'receta',
    loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
  },  {
    path: 'presupuesto',
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
