import { Component } from '@angular/core';
import { PlayersService } from 'src/app/players.service';
import { SportsService } from 'src/app/sports.service';
import { Sport } from 'src/Models/Sport';
import { Player } from 'src/Models/Player';
import { HttpErrorResponse } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent {

  sportsname:Sport[];
  nodata:boolean;
  sporterror:boolean;
  id:string;

  constructor(private playerservice:PlayersService, private sportsservice:SportsService, private route:Router,private router:ActivatedRoute)
  {
    this.id=this.router.snapshot.paramMap.get('id');
  }

  p:Player;
  
  message:string;
  Gender=['male','female'];
  Status=['inactive','active'];

  sportname:Sport[];
  sporterr:boolean;

 
  ngOnInit(): void {
    this.sportsservice.getsports().subscribe({
      next:data=>{
        this.sportname=data;
      },
      error: (err: HttpErrorResponse) => this.sporterr = true
      })

    this.playerservice.getplayer(this.id).subscribe(
      data=>{
        this.p=data;
      })
  //   this.sportsservice.getplayers().subscribe({
  //     next:data=>{
  //       this.sportsname=data;
  //     },
  //     error: (err: HttpErrorResponse) => this.sporterror = true
  // })
  } 

  Update(player:Player)
  {
    let id=player.playerId;
    this.playerservice.editplayer(id,player).subscribe(
      data=>{
        this.message="Player Updated Successfully";
      }
    )
  }

  
}
