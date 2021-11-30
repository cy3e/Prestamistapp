import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontoapagarPage } from './montoapagar.page';

const routes: Routes = [
  {
    path: '',
    component: MontoapagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontoapagarPageRoutingModule {}
