import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-approved-participations',
  templateUrl: './approved-participations.component.html',
  styleUrls: ['./approved-participations.component.css']
})
export class ApprovedParticipationsComponent {
  plist:Participation[];
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null, eventName:"", sportsId:null, sportsName:"", status:"", comments:""};

  constructor(private participationservice:ParticipationsService) {}

    ngOnInit(): void {
      this.participationservice.getapprovedparticipations().subscribe(
        data=>{
          this.plist=data;
          console.log(this.plist);
        });
  }
}