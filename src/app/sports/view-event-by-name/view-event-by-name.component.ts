import { Component ,OnInit} from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-event-by-name',
  templateUrl: './view-event-by-name.component.html',
  styleUrls: ['./view-event-by-name.component.css']
})
export class ViewEventByNameComponent {
  eventname="";
  message:string;
  role=localStorage.getItem("role");
  nodata: boolean;
  elist:any;

  // e:Event={
  //   eventId:null,
  //   eventDate:null,
  //   eventName:"",
  //   noofSlots:null,
  //   sportsName:"",
  //   status:""
  // }

  constructor(private eventservice:EventsService) {}

  ngOnInit(): void {
    
  }

  getEventByName()
  {
    this.eventservice.getEventsByName(this.eventname).subscribe({
      next:data=>{
          this.elist=data;
          this.nodata=false;
          console.log(this.elist);
      },
      error: (err: HttpErrorResponse) =>{ this.nodata = true; this.elist=null;}
  })
  }

  clickMethod(event:Event) 
  {
    if(confirm("Are you sure you want to cancel "+event.eventName + " event?")) {
      this.eventservice.deleteevent(event.eventId).subscribe()
      {
        this.message="Event Cancelled Successfully";
        
      }
    }
  }
}