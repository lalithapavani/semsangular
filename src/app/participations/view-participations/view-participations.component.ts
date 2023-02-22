import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-participations',
  templateUrl: './view-participations.component.html',
  styleUrls: ['./view-participations.component.css']
})
export class ViewParticipationsComponent {
  plist:Participation[];
  nodata:boolean;
  role=localStorage.getItem("role");

  constructor(private participationservice:ParticipationsService) { }


  ngOnInit(): void {
    this.participationservice.getparticipations().subscribe({
      next:data=>{
        this.plist=data;
        console.log(this.plist);
    },
    error: (err: HttpErrorResponse) => this.nodata = true
  })
  }
}