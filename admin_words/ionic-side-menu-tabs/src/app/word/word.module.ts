import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { IonicModule } from '@ionic/angular';

import { WordPageRoutingModule } from './word-routing.module';

import { WordPage } from './word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    WordPageRoutingModule
  ],
  declarations: [WordPage]
})
export class WordPageModule {}
