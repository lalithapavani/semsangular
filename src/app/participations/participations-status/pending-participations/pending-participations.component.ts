import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-pending-participations',
  templateUrl: './pending-participations.component.html',
  styleUrls: ['./pending-participations.component.css']
})
export class PendingParticipationsComponent {
  plist:Participation[];
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null, eventName:"", sportsId:null, sportsName:"", status:"", comments:""};

  constructor(private participationservice:ParticipationsService) {}

  ngOnInit(): void {
    this.participationservice.getpendingparticipations().subscribe(
      data=>{
        this.plist=data;
        console.log(this.plist);
    });
  }
}
