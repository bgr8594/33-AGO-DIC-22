import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireStorePageRoutingModule } from './fire-store-routing.module';

import { FireStorePage } from './fire-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireStorePageRoutingModule
  ],
  declarations: [FireStorePage]
})
export class FireStorePageModule {}
