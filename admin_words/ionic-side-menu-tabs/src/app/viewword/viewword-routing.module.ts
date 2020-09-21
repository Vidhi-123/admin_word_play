import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewwordPage } from './viewword.page';

const routes: Routes = [
  {
    path: '',
    component: ViewwordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewwordPageRoutingModule {}
