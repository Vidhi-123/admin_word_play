import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  displayedColumns: string[] = ['user_name', 'words_count', 'Average_rating', 'Action'];
  dataSource = new MatTableDataSource();
  arr:any[]=[];
  constructor(private _ser:UserService,private route:Router) { }

  onNotify(){
    this.route.navigate(['notificaton']);

  }


  public ionViewWillEnter()
  {
    //this.slider.startAutoplay();
    //console.log("hey");
    this.ngOnInit();
  }

  onViewMore(user_id)
  {
    localStorage.setItem("view_user_id",user_id)
    this.route.navigate(['viewuser']);
  }




  ngOnInit() {
    this._ser.getUserAdmin().subscribe(
      (data:any[])=>{
        console.log(data);
        this.arr=data;
        console.log(this.arr);
        this.dataSource.data=data;
      }
    )
  }

}
