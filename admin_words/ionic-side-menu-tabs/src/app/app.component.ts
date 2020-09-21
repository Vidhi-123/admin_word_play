import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  navigate: any; 
  user_id:number=0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    public menuCtrl: MenuController 
  ) {
    this.initializeApp();
  }
  ngOnInit()
  {
    console.log(this.user_id);
    this.user_id=Number(localStorage.getItem("user_id"));
    console.log(this.user_id);
  }

  OnUser()
  {
    this.menuCtrl.close();
    this.router.navigate(['user']);
  }

  onClickWord()
  {
    
      this.menuCtrl.close();
      this.router.navigate(['word']);
    
  }

  logoutClicked()
  {
    this.menuCtrl.close();
    this.user_id=0;
    localStorage.clear();
    this.router.navigate(['login']);
  }
  loginClicked()
  {
    this.menuCtrl.close();
    
    
    this.router.navigate(['login']);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
