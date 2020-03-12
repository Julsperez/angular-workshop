import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { FlightsComponent } from './flights/flights.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './_components/login/login.component';
import { SigninComponent } from './_components/signin/signin.component';

const routes: Routes = [
  {
     path: '', component: HomepageComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'flights', component: FlightsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signin', component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
