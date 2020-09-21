import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificatonPageRoutingModule } from './notificaton-routing.module';

import { NotificatonPage } from './notificaton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificatonPageRoutingModule
  ],
  declarations: [NotificatonPage]
})
export class NotificatonPageModule {}
