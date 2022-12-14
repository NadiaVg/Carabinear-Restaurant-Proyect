import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        ContactPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactPageRoutingModule,
        ComponentsModule
    ]
})
export class ContactPageModule {}
