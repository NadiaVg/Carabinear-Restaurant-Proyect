import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesListPageRoutingModule } from './dishes-list-routing.module';

import { DishesListPage } from './dishes-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesListPageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule
  ],
  declarations: [DishesListPage]
})
export class DishesListPageModule {}
