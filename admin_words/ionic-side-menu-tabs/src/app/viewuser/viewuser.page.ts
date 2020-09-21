import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.page.html',
  styleUrls: ['./viewuser.page.scss'],
})
export class ViewuserPage implements OnInit {

  constructor(private _ser:UserService,private _route:Router) { }
  displayedColumns: string[] = ['word_name', 'average_rating', 'rater_count'];
  dataSource = new MatTableDataSource();
  arr:any[]=[];
  public ionViewWillEnter()
  {
    //this.slider.startAutoplay();
    //console.log("hey");
    this.ngOnInit();
  }

  onNotify(){
    this._route.navigate(['notificaton']);

  }

  onDisable()
  {
    let view_user_id=localStorage.getItem("view_user_id"); 
    if(confirm("once you disable you cannot enable are you sure you want to disable ?"))
    {
    this._ser.disableUser(this.arr[0]).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr[0].is_enabled=0;
      }
    )
    }
  }


  ngOnInit() {
    let view_user_id=localStorage.getItem("view_user_id");
    console.log(view_user_id);
    this._ser.getUserById(view_user_id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.arr=data;
        if(this.arr[0].type==1)
        {
          this.arr[0].type="Audience";
        }
        else if(this.arr[0].type==2)
        {
          this.arr[0].type="writer"
        }
        else if(this.arr[0].type==3)
        {
          this.arr[0].type="director"
        }
        
      }
    )
    this._ser.getUserAdminById(view_user_id).subscribe(
      (data1:any[])=>{
        console.log(data1);
        this.dataSource.data=data1;

      }
    )
  }

}
