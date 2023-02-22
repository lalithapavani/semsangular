import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Event } from 'src/Models/Event';
import {Observable, throwError} from'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  elist:any;
  url:string="http://localhost:5195/api/Event";
  //url1="http://localhost:5155/api/Event/EventByName?name=event1";
  refreshList():Event[]
  {
    return this.elist;
  }
  
  
  addevent(e:Event):Observable<Event>
  {
    return this.httpclient.post<Event>(this.url,e,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  constructor(private httpclient:HttpClient) { }

  getevents():Observable<Event[]>{
    this.elist=this.httpclient.get(this.url);
    return this.elist;
  }

  getEventsByName(name:string):Observable<Event>
  {
    this.elist=this.httpclient.get(this.url+"/EventsByName?name="+name)
    return this.elist;
  }

  getEventById(id:string):Observable<Event>
  {
    this.elist=this.httpclient.get<Event>(this.url+"/EventById?id="+id)
    return this.elist;
  }

  updateevent(id:number,e:Event):Observable<Event>
  {
    return this.httpclient.put<Event>(this.url,e,{
      headers:new HttpHeaders ({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  deleteevent(id:Number):Observable<Event>
  {
    return this.httpclient.delete<Event>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getevents();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
}