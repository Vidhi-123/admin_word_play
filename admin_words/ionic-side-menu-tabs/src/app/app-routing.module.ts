import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'viewuser',
    loadChildren: () => import('./viewuser/viewuser.module').then( m => m.ViewuserPageModule)
  },
  {
    path: 'word',
    loadChildren: () => import('./word/word.module').then( m => m.WordPageModule)
  },
  {
    path: 'viewword',
    loadChildren: () => import('./viewword/viewword.module').then( m => m.ViewwordPageModule)
  },
  {
    path: 'notificaton',
    loadChildren: () => import('./notificaton/notificaton.module').then( m => m.NotificatonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
