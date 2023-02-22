import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';

import { JwtModule } from "@auth0/angular-jwt";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SportsComponent } from './sports/sports.component';
import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { ViewPlayersComponent } from './players/view-players/view-players.component';
import { ViewSportsComponent } from './sports/view-sports/view-sports.component';
import { ViewSportByNameComponent } from './sports/view-sport-by-name/view-sport-by-name.component';
import { ViewEventsComponent } from './sports/view-events/view-events.component';
import { CreateEventComponent } from './sports/create-event/create-event.component';
import { UpdateEventComponent } from './sports/update-event/update-event.component';
import { CancelEventComponent } from './sports/cancel-event/cancel-event.component';
import { ViewEventByNameComponent } from './sports/view-event-by-name/view-event-by-name.component';
import { ParticipationsComponent } from './participations/participations.component';
import { AddParticipationComponent } from './participations/add-participation/add-participation.component';
import { ViewParticipationsComponent } from './participations/view-participations/view-participations.component';
import { EditParticipationsComponent } from './participations/edit-participations/edit-participations.component';
import { ApprovedParticipationsComponent } from './participations/participations-status/approved-participations/approved-participations.component';
import { PendingParticipationsComponent } from './participations/participations-status/pending-participations/pending-participations.component';
import { DeclinedParticipationsComponent } from './participations/participations-status/declined-participations/declined-participations.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SportsComponent,
    PlayersComponent,
    AddPlayerComponent,
    ViewPlayersComponent,
    ViewSportsComponent,
    ViewSportByNameComponent,
    ViewEventsComponent,
    CreateEventComponent,
    UpdateEventComponent,
    CancelEventComponent,
    ViewEventByNameComponent,
    ParticipationsComponent,
    AddParticipationComponent,
    ViewParticipationsComponent,
    EditParticipationsComponent,
    ApprovedParticipationsComponent,
    PendingParticipationsComponent,
    DeclinedParticipationsComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
