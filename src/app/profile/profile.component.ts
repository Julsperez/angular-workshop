import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  bookings = [
    {
      precio: 1111,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasda',
      jalo: 'asdasdas'
    },
    {
      precio: 22222,
      description: 'aadasldfhbaldhfbaiñdufÑWEdasdasdasda',
      jalo: 'asdasdas'
    },
    {
      precio: 1113,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasda',
      jalo: 'asdasdasfasasfasdasfaas'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
