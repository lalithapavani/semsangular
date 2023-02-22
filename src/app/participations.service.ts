import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participation } from './Models/Participation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null,eventName:"",sportsId:null,sportsName:"",status:"",comments:""};
  plist:any;
  url:string="http://localhost:5026/api/Participation";
  
  constructor(private httpclient:HttpClient) 
  { 

  }
  
  getparticipations():Observable<Participation[]>
  {
    this.plist=this.httpclient.get(this.url);
    return this.plist;
  }

  getapprovedparticipations():Observable<Participation[]>
  {
    this.plist=this.httpclient.get(this.url+"/GetParticipationsByStatus?name=approved");
    return this.plist;
  }
  getpendingparticipations():Observable<Participation[]>
  {
    this.plist=this.httpclient.get(this.url+"/GetParticipationsByStatus?name=pending");
    return this.plist;
  }
  getdeclinedparticipations():Observable<Participation[]>
  {
    this.plist=this.httpclient.get(this.url+"/GetParticipationsByStatus?name=declined");
    return this.plist;
  }

  getparticipation(participationId:string):Observable<Participation>
  {
    return this.httpclient.get<Participation>(this.url+"/GetParticipationById?id="+participationId);
  }

  addparticipation(p:Participation):Observable<Participation>
  {
    return this.httpclient.post<Participation>(this.url,p,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  editparticipation(id:number,p:Participation):Observable<Participation>
  {
    return this.httpclient.put<Participation>(this.url+"?id="+id,p,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}