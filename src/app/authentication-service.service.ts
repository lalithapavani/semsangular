import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  
  role=localStorage.getItem("role");

  constructor() { 
    
  }
}
