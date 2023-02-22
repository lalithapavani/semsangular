import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Player } from 'src/Models/Player';
import { PlayersService } from 'src/app/players.service';
import { SportsService } from 'src/app/sports.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Sport } from 'src/Models/Sport';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  sportsname:Sport[];
  nodata:boolean;
  sporterror:boolean;
  constructor(private playerservice:PlayersService, private sportsservice:SportsService){

  }
  p:Player={playerId:null,playerName:"",age:null,contactNumber:"",email:"",gender:"",sportsName:"",status:""};
  
  message:string;
  Gender=['male','female'];
 

  ngOnInit(): void {
    this.sportsservice.getsports().subscribe({
      next:data=>{
        this.sportsname=data;
      },
      error: (err: HttpErrorResponse) => this.sporterror = true
  })
  } 

  saveplayer(data:any):void
  {
   this.playerservice.addplayer(data).subscribe({
     next:data=>{
       this.message="Player Added Successfully";
    },
    error: (err: HttpErrorResponse) => this.nodata = true
  }) 
    console.log(data);
    console.log(this.p);
  }
}