import { Component, OnInit } from '@angular/core';
import { ReportService } from '../service/report.service';
import { WordService } from '../service/word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificaton',
  templateUrl: './notificaton.page.html',
  styleUrls: ['./notificaton.page.scss'],
})
export class NotificatonPage implements OnInit {
  arr:any[]=[];
  constructor(private _ser:ReportService,private _ser1:WordService,private _route:Router) { }

  isSeen(item)
  {
    if(confirm("are you sure you want to remove flag?"))
    {
    this._ser.updateReport(item).subscribe(
      (data:any)=>{
        console.log(data);
        for(let i=0;i<this.arr.length;i++)
        {
          if(item==this.arr[i])
          {
            this.arr.splice(i,1);
          }
        }
      }
    )
  }
}

public ionViewWillEnter()
  {
    //this.slider.startAutoplay();
    //console.log("hey");
    this.ngOnInit();
  }

onNotify(){
  this._route.navigate(['notificaton']);

}

  onDelete(word_id,item)
  {
    if(confirm("are you sure you want to delete?"))
    {
    this._ser1.DeletewordById(word_id).subscribe(
      (data:any)=>{
        console.log(data);
        this._ser.updateReport(item).subscribe(
          (data1:any)=>{
            console.log(data1);
          }
        )
        for(let i=0;i<this.arr.length;i++)
        {
          if(word_id==this.arr[i].word_id)
          {
            this.arr.splice(i,1);
          }
        }
      }
    )
  }
  }

  ngOnInit() {
 this.arr=[];
    this._ser.getReport().subscribe(
      (data:any[])=>{
        console.log(data);
        //this.arr=data;
        for(let i=0;i<data.length;i++)
        {
          if(data[i].is_seen==0)
          {
            this.arr.push(data[i]);
            console.log(this.arr)
          }
        }
      }
    )
  }

}
