import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-add-participation',
  templateUrl: './add-participation.component.html',
  styleUrls: ['./add-participation.component.css']
})
export class AddParticipationComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private participationservice:ParticipationsService){

  }
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null,eventName:"",sportsId:null,sportsName:"",status:"",comments:""};  
  message:string;
  
  saveparticipation(data:any):void
  {
   this.participationservice.addparticipation(data).subscribe(
     data=>{
       this.message="Participation Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.p);
  }
}
