import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './navBar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightCardComponent } from './_components/flight-card/flight-card.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './_components/login/login.component';
import { SigninComponent } from './_components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    FlightsComponent,
    FlightCardComponent,
    ProfileComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
