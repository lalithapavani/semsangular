import { Component,OnInit } from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})

export class ViewEventsComponent {
  message:string;
  elist:Event[];
  e:Event[];
  nodata:boolean;
  role=localStorage.getItem("role");
  constructor(private eventservice:EventsService) {}
  

  ngOnInit(): void {
    this.eventservice.getevents().subscribe({
      next:data=>{
        this.elist=data;
        
      },
      error: (err: HttpErrorResponse) => this.nodata = true
  }) 
  }

  // clickMethod(event:Event) 
  // {
  //   if(confirm("Are you sure you want to cancel "+event.eventName + " event?")) {
  //     this.eventservice.deleteevent(event.eventId).subscribe()
  //     {
  //       this.message="Event Cancelled Successfully";
  //       this.elist = this.elist.filter(item => item.eventId !=event.eventId);
  //       console.log(this.elist.length);
  //     }
  //   }
  // }
}