import { Component } from '@angular/core';
import { Player } from 'src/Models/Player';
import { PlayersService } from 'src/app/players.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent {
  playerlist:Player[];
  message:string;
  role=localStorage.getItem("role");
  nodata:boolean;

  constructor(private playerservice:PlayersService) { }


  ngOnInit(): void {
    this.playerservice.getplayers().subscribe({
      next: data => {
        this.playerlist=data;
          console.log(this.playerlist);
      },
      error: (err: HttpErrorResponse) => this.nodata = true
      })
  }

  // clickMethod(player:Player) {
  //   if(confirm("Are you sure to remove "+player.playerName + " as a player?")) {
  //     this.playerservice.removeplayer(player.playerId).subscribe()
  //     {
  //     this.message="Player Removed Successfully";
  //     this.playerlist = this.playerlist.filter(item => item.playerId != player.playerId);
  //     console.log(this.playerlist.length);
  //     }
  //   } 
  // }
}
