import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDishesPage } from './add-dishes.page';

const routes: Routes = [
  {
    path: '',
    component: AddDishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDishesPageRoutingModule {}
