import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  inputs: ['id','name','description','image','price','stock','from']

})
export class FlightCardComponent implements OnInit {
  description: string;
  from: string;
  id: number;
  image: string;
  name: string;
  price: number|null = null;
  stock: number;

  constructor() { }

  ngOnInit() {
    console.log(this.stock);
  }

}
