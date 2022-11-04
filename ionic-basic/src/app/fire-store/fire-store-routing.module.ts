import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireStorePage } from './fire-store.page';

const routes: Routes = [
  {
    path: '',
    component: FireStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireStorePageRoutingModule {}
