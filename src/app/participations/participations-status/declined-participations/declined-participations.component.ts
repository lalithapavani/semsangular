import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-declined-participations',
  templateUrl: './declined-participations.component.html',
  styleUrls: ['./declined-participations.component.css']
})
export class DeclinedParticipationsComponent {
  plist:Participation[];
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null, eventName:"", sportsId:null, sportsName:"", status:"", comments:""};

  constructor(private participationservice:ParticipationsService) {}

  ngOnInit(): void {
      this.participationservice.getdeclinedparticipations().subscribe(
        data=>{
          this.plist=data;
          console.log(this.plist);
    });
  }
}
