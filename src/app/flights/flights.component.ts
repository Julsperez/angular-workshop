import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights = [
    {
      some:2323,
      algo:33333
    },
    {
      some:2323,
      algo:433
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
