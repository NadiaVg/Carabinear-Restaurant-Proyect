import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesListPage } from './dishes-list.page';

const routes: Routes = [
  {
    path: '',
    component: DishesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishesListPageRoutingModule {}
