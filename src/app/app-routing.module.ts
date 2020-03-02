import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { FlightsComponent } from './flights/flights.component';



const routes: Routes = [
  {
     path: '', component: HomepageComponent
  },
  {
    path: 'flights', component: FlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
