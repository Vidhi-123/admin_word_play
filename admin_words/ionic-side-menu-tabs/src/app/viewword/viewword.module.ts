import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatTableModule } from "@angular/material/table";
import { ViewwordPageRoutingModule } from './viewword-routing.module';

import { ViewwordPage } from './viewword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    IonicModule,
    ViewwordPageRoutingModule
  ],
  declarations: [ViewwordPage]
})
export class ViewwordPageModule {}
