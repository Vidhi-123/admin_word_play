import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificatonPage } from './notificaton.page';

const routes: Routes = [
  {
    path: '',
    component: NotificatonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificatonPageRoutingModule {}
