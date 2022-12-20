import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { AdminListPageRoutingModule } from './admin-list-routing.module';

import { AdminListPage } from './admin-list.page';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListPageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule
  ],
  declarations: [
    AdminListPage
  ]
})
export class AdminListPageModule {}
