import { Component } from '@angular/core';
import { register } from 'src/Models/register';
import { AppService } from '../app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  s:register={username:"",password:""};
  message="";
  nodata:boolean;

  constructor(private appservice:AppService) { }

  save(data:any):void{
    this.appservice.registerUser(data).subscribe({
      next:data=>{
        this.message="User Registered Successfully";
     },
     error: (err: HttpErrorResponse) => this.nodata = true
  }) 
     console.log(data);
     console.log(this.s);
   }
}