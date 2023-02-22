import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SportsComponent } from './sports/sports.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewPlayersComponent } from './players/view-players/view-players.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { PlayersComponent } from './players/players.component';
import { ViewEventsComponent } from './sports/view-events/view-events.component';
import { ViewSportsComponent } from './sports/view-sports/view-sports.component';
import { ViewSportByNameComponent } from './sports/view-sport-by-name/view-sport-by-name.component';
import { ViewEventByNameComponent } from './sports/view-event-by-name/view-event-by-name.component';
import { CreateEventComponent } from './sports/create-event/create-event.component';
import { CancelEventComponent } from './sports/cancel-event/cancel-event.component';
import { ParticipationsComponent } from './participations/participations.component';
import { AddParticipationComponent } from './participations/add-participation/add-participation.component';
import { ViewParticipationsComponent } from './participations/view-participations/view-participations.component';
import { EditParticipationsComponent } from './participations/edit-participations/edit-participations.component';
import { ApprovedParticipationsComponent } from './participations/participations-status/approved-participations/approved-participations.component';
import { PendingParticipationsComponent } from './participations/participations-status/pending-participations/pending-participations.component';
import { DeclinedParticipationsComponent } from './participations/participations-status/declined-participations/declined-participations.component';
import { UpdateEventComponent } from './sports/update-event/update-event.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';

const routes: Routes = [
  {path:'', title:'Home', component:HomeComponent},
  {path:'home', title:'Home', component:HomeComponent},
  {path:'login', title:'Login', component:LoginComponent},
  {path:'register', title:'Register', component:RegisterComponent},
  {path:'sports', title:'Sports', component:SportsComponent, canActivate: [AuthGuard]},
  {
    path: '', pathMatch: 'full', redirectTo: 'players'
  },
  {
    path: 'players',
    title:'Players',
    component: PlayersComponent,
    canActivate: [AuthGuard],
    children: [
        {
           path: 'addplayer',
           title:'Add Player',
           component: AddPlayerComponent,
           canActivate: [AuthGuard]
        },
        {
           path: 'viewplayers',
           title:'View Players',
           component: ViewPlayersComponent,
           canActivate: [AuthGuard]
        },
        {
          path: 'editplayer/:id',
          title:'View Players',
          component: EditPlayerComponent,
          canActivate: [AuthGuard]
       }
        
    ]
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'sports'
  },
  {
    path: 'sports',
    title:'Sports',
    component: SportsComponent,
    canActivate: [AuthGuard],
    children: [
        {
           path: 'viewsports',
           title:'List of Sports',
           component: ViewSportsComponent,
           canActivate: [AuthGuard]
        },
        {
          path: 'viewsportbyname',
          title:'Find Sport by Name',
          component: ViewSportByNameComponent,
          canActivate: [AuthGuard]
       },
       {
        path: 'viewevents',
        title:'List of Events',
        component: ViewEventsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'vieweventbyname',
        title:'Find Event by Name',
        component: ViewEventByNameComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'addevent',
        title:'Create new event',
        component: CreateEventComponent,
        canActivate: [AuthGuard]
      },
      
      {
        path: 'editevent/:id',
        component: UpdateEventComponent,
        canActivate: [AuthGuard]
      }

      // {
      //   path: 'deleteevent',
      //   component: CancelEventComponent,
      //   canActivate: [AuthGuard]
      // }
    ]
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'participations'
  },
  {
    path: 'participations',
    title:'Participations',
    component: ParticipationsComponent,
    canActivate: [AuthGuard],
    children: [
        {
           path: 'addparticipation',
           title:'Add Participation',
           component: AddParticipationComponent,
           canActivate: [AuthGuard]
        },
        {
           path: 'viewparticipations',
           title:'View Participations',
           component: ViewParticipationsComponent,
           canActivate: [AuthGuard]
        },
        {
          path: 'editparticipation/:id',
          title:'Edit Participations',
          component: EditParticipationsComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'approvedparticipations',
          title:'Approved Participations',
          component: ApprovedParticipationsComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'pendingparticipations',
          title:'Pending Participations',
          component: PendingParticipationsComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'declinedparticipations',
          title:'Declined Participations',
          component: DeclinedParticipationsComponent,
          canActivate: [AuthGuard]
        }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
