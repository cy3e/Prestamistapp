import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontoapagarPageRoutingModule } from './montoapagar-routing.module';

import { MontoapagarPage } from './montoapagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontoapagarPageRoutingModule
  ],
  declarations: [MontoapagarPage]
})
export class MontoapagarPageModule {}
