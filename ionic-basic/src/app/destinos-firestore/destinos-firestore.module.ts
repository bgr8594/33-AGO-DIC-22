import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinosFirestorePageRoutingModule } from './destinos-firestore-routing.module';

import { DestinosFirestorePage } from './destinos-firestore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinosFirestorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DestinosFirestorePage]
})
export class DestinosFirestorePageModule {}
