import { Component, OnInit } from '@angular/core';
import { WordService } from '../service/word.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewword',
  templateUrl: './viewword.page.html',
  styleUrls: ['./viewword.page.scss'],
})
export class ViewwordPage implements OnInit {

  user_word_details:any[]=[];
  displayedColumns: string[] = ['user_name', 'star'];
  dataSource = new MatTableDataSource();
  constructor(private _ser:WordService,private _route:Router) { }


  onDeleteWord(word_id)
  {
    if(confirm("are you sure you want to delete?"))
    {
      this._ser.DeletewordById(word_id).subscribe(
        (data:any)=>{
          console.log(data);
          for(let i=0;i<this.user_word_details.length;i++)
          {
            
            if(this.user_word_details[i].word_id==word_id)
            {
              if(i==0)
              {
                this.dataSource.data=[];
              }
              this.user_word_details.splice(i,1);

            }

          }
        }
      )
    }
  }


  onNotify(){
    this._route.navigate(['notificaton']);
  }

  public ionViewWillEnter()
  {
    //this.slider.startAutoplay();
    console.log("hey");
    this.ngOnInit();
  }

  ngOnInit() {

    let word_id=localStorage.getItem("word_view_id");
    let id=localStorage.getItem("id1");
    console.log(id);
    console.log(word_id);
    //localStorage.removeItem("word_view_id");
    this._ser.getAdminWordsById(word_id).subscribe(
      (data:any[])=>{
        console.log(data);
        this.dataSource.data=data;
      }
    )
    this._ser.getWordsById(id).subscribe(
      (data1:any[])=>{
        console.log(data1);
        this.user_word_details=data1;
        for(let i=0;i<this.user_word_details.length;i++)
        {
          if(this.user_word_details[i].word_name.search('-')!=-1)
          {
            let tmp=this.user_word_details[i].word_name;
            this.user_word_details[i].word_name=this.user_word_details[0].word_name;
            this.user_word_details[0].word_name=tmp;

            let tmp1=this.user_word_details[i].name;
            this.user_word_details[i].name=this.user_word_details[0].name;
            this.user_word_details[0].name=tmp1;

            let tmp2=this.user_word_details[i].rating_avg;
            this.user_word_details[i].rating_avg=this.user_word_details[0].rating_avg;
            this.user_word_details[0].rating_avg=tmp2;


            let tmp3=this.user_word_details[i].rating_count;
            this.user_word_details[i].rating_count=this.user_word_details[0].rating_count;
            this.user_word_details[0].rating_count=tmp3;
          }
        }
      }
    )

  }

}
