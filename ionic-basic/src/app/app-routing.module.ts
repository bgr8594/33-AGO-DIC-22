import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './service/aut-guard.guard';

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
    path: 'main',
    children:[
      {
        path: 'presupuesto',
        loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)

      },
      {
        path: 'receptor',
        loadChildren: () => import('./receptor/receptor.module').then( m => m.ReceptorPageModule)
      },
      {
        path: 'detalle-receta',
        loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule)
      },
      {
        path: 'receta',
        loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'destinos',
        loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule)
      },
      {
        path: 'destinos-firestore',
        loadChildren: () => import('./destinos-firestore/destinos-firestore.module').then( m => m.DestinosFirestorePageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
      }
    ],
    canActivate: [AutGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }