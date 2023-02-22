import { Component } from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SportsService } from 'src/app/sports.service';
import { Sport } from 'src/Models/Sport';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  message:string;
  e:Event;
  sportsname:Sport[];
  id:string;
  nodata:boolean;
  updateerror:boolean;
  sporterror:boolean;

  eventStatus = ['scheduled', 'cancelled'];

  minDate: string;
  maxDate: string;
  selectedDate: string;

  // constructor(private eventservice:EventsService) {
    
  // }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  constructor(private eventservice:EventsService,private route:Router,private router:ActivatedRoute, private sportsservice:SportsService) 
  {
     this.id=this.router.snapshot.paramMap.get('id');
     const today = new Date();
    this.minDate = this.formatDate(today);
    today.setFullYear(today.getFullYear() + 1); // set max date to one year from today
    this.maxDate = this.formatDate(today);
  }

  ngOnInit(): void {
    this.eventservice.getEventById(this.id).subscribe({
      next:data=>{
        this.e=data;
        this.nodata=false;
      },
      error: (err: HttpErrorResponse) => this.nodata = true
  })

  this.sportsservice.getsports().subscribe({
    next:data=>{
      this.sportsname=data;
      this.sporterror = false
    },
    error: (err: HttpErrorResponse) => this.sporterror = true
})
  }

  Update(event:Event)
  {
    let id=event.eventId;
    this.eventservice.updateevent(id,event).subscribe({
      next:data=>{
        this.message="Event Updated Successfully";
        this.updateerror=false;
      },
      error: (err: HttpErrorResponse) => this.updateerror = true
  })
  }
}