import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from 'src/app/Models/Participation';
import { ParticipationsService } from 'src/app/participations.service';

@Component({
  selector: 'app-edit-participations',
  templateUrl: './edit-participations.component.html',
  styleUrls: ['./edit-participations.component.css']
})
export class EditParticipationsComponent {
  
  message:string;
  p:Participation;
  id:string;
  
  applicationStatus = ['approved', 'pending', 'declined'];
  constructor(private participationservice:ParticipationsService,private route:Router,private router:ActivatedRoute) 
  {
     this.id=this.router.snapshot.paramMap.get('id');
     
  }

  ngOnInit(): void {
    this.participationservice.getparticipation(this.id).subscribe(
      data=>{
        this.p=data;
      }
    )
  }

  Update(participation:Participation)
  {
    let id=participation.participationId;
    this.participationservice.editparticipation(id,participation).subscribe(
      data=>{
        this.message="Participation Updated Successfully";
      }
    )
  }
}
