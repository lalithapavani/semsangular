import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Sport } from 'src/Models/Sport';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SportsService {
  slist:any;
  
  url:string="http://localhost:5195/api/Sport";
  

  constructor(private httpclient:HttpClient) {}
  getsports():Observable<Sport[]>{
    this.slist=this.httpclient.get(this.url);
    return this.slist;
}  

getSportByName(name:string):Observable<Sport>
  {
    this.slist=this.httpclient.get<Sport>(this.url+"/SportByName?name="+name)
    return this.slist;
  }
}