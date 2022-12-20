import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDishPage } from './update-dish.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDishPageRoutingModule {}
