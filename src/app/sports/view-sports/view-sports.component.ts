import { Component,OnInit } from '@angular/core';
import { Sport } from 'src/Models/Sport';
import { SportsService } from 'src/app/sports.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-sports',
  templateUrl: './view-sports.component.html',
  styleUrls: ['./view-sports.component.css']
})
export class ViewSportsComponent implements OnInit{
  slist:Sport[];
  nodata:boolean;
  
  constructor(private sportservice:SportsService) {}
  ngOnInit(): void {
    this.sportservice.getsports().subscribe({
      next:data=>{
        this.slist=data;
      },
      error: (err: HttpErrorResponse) => this.nodata = true
  })
  }
}
