import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  title = 'PlayerAng';
  user:boolean;
  admin:boolean;
  role=localStorage.getItem("role");

  constructor(){}

  ngOnInit(): void {

    if(this.role==='admin')
      this.admin=true;
    else
      this.user=true;
  }
}
