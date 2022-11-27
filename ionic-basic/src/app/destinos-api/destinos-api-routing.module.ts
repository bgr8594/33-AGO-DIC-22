import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinosFirestorePage } from './destinos-api.page';

const routes: Routes = [
  {
    path: '',
    component: DestinosFirestorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinosFirestorePageRoutingModule {}
