import { Component, OnInit } from '@angular/core';
import { Event } from 'src/Models/Event';
import { EventsService } from 'src/app/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from 'src/app/sports.service';
import { Sport } from 'src/Models/Sport';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  
  // date=new Date();
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
  
  e:Event={
    eventId:null,
    eventDate:new Date,
    eventName:"",
    noofSlots:null,
    sportsName:"",
    status:""
}
  nodata:boolean;
  sporterror:boolean;
  sportsname:Sport[];
  message:string;

  constructor(private eventservice:EventsService, private sportservice:SportsService) { 
    // console.log(this.date);
    const today = new Date();
    this.minDate = this.formatDate(today);
    today.setFullYear(today.getFullYear() + 1); // set max date to one year from today
    this.maxDate = this.formatDate(today);
  }
  ngOnInit(): void {
    this.sportservice.getsports().subscribe({
      next:data=>{
        this.sportsname=data;
        this.sporterror = false
      },
      error: (err: HttpErrorResponse) => this.sporterror = true
  })
  }
  save():void {

  }
  
  saveevent(data:any):void{
    this.eventservice.addevent(data).subscribe({
      next:data=>{
        this.message="Event Added";
        this.nodata = true;
      },
      error: (err: HttpErrorResponse) => this.nodata = true
    })
  }
}