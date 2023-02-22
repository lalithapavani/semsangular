import { Injectable } from '@angular/core';
import { register } from 'src/Models/register';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  url:string="http://localhost:5172/api/Register"; 

  constructor(private httpclient:HttpClient) { }
  
  registerUser(s:register):Observable<register>
  {
    return this.httpclient.post<register>(this.url,s,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
}
