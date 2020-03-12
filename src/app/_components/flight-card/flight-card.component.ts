import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
  // inputs: ['bankName']

})
export class FlightCardComponent implements OnInit {
  bankName: string;

  constructor() { }

  ngOnInit() {
    console.log(this.bankName);
  }

}
