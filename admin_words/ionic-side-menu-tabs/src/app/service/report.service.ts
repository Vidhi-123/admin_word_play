import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private report_url:string="http://localhost:3000/report";
  constructor(private _http:HttpClient) { }
  updateReport(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.report_url,body,{headers:head1});

  }
  getReport()
  {
    return this._http.get(this.report_url);
  }
}
