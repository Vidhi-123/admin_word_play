import { Component, OnInit } from '@angular/core';
import { WordService } from '../service/word.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word',
  templateUrl: './word.page.html',
  styleUrls: ['./word.page.scss'],
})
export class WordPage implements OnInit {

  arr:any[]=[];
  displayedColumns: string[] = ['word_name', 'author', 'Average_rating', 'Action'];
  dataSource = new MatTableDataSource();
  constructor(private _ser:WordService,private _route:Router) { }
 




  onViewMore(word_id,id)
  {
    console.log(word_id);
    console.log(id);
    localStorage.setItem("word_view_id",word_id);
    localStorage.setItem("id1",id)
    setTimeout(()=>{

      this._route.navigate(['viewword']);
    },1000)
   
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



  ngOnInit() {
    this.arr=[];
    this._ser.getAdminWords().subscribe(
      (data:any[])=>{
        console.log(data);
        //this.dataSource.data=data;
        for(let i=0;i<data.length;i++)
        {
          if(data[i].word_name.search('-')!=-1)
          {
            this.arr.push(data[i]);
          }
          if(i==data.length-1)
          {
            this.dataSource.data=this.arr;
          }
        }
      }
    )
  }

}
