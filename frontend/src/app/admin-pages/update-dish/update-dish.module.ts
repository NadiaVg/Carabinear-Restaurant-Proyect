import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDishPageRoutingModule } from './update-dish-routing.module';

import { UpdateDishPage } from './update-dish.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDishPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [UpdateDishPage]
})
export class UpdateDishPageModule {}
