import { Component, OnInit } from '@angular/core';
import { Sport } from 'src/Models/Sport';
import { SportsService } from 'src/app/sports.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-sport-by-name',
  templateUrl: './view-sport-by-name.component.html',
  styleUrls: ['./view-sport-by-name.component.css']
})
export class ViewSportByNameComponent {
  sportname="";
  
  nodata:boolean;

  s:Sport={
    sportsId:null,
    sportsType:"",
    noOfPlayers:null,
    sportsName:"",
    status:""
  }
  constructor(private sportservice:SportsService) {}
  ngOnInit(): void {

  }
  getSportByName()
  {

    this.sportservice.getSportByName(this.sportname).subscribe({
      next: data => {
        this.s=data;
          console.log(this.s);
          this.nodata=false;
      },
      error: (err: HttpErrorResponse) =>{ this.nodata = true; this.s=null; console.log(this.s);}
      })
  }
}