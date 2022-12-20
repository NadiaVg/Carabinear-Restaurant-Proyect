import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDishesPageRoutingModule } from './add-dishes-routing.module';

import { AddDishesPage } from './add-dishes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDishesPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AddDishesPage]
})
export class AddDishesPageModule {}
