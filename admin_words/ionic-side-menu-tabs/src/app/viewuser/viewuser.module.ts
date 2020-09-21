import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatTableModule } from "@angular/material/table";
import { ViewuserPageRoutingModule } from './viewuser-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { ViewuserPage } from './viewuser.page';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    ViewuserPageRoutingModule
  ],
  declarations: [ViewuserPage]
})
export class ViewuserPageModule {}
