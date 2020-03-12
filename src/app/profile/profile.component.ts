import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  bookings = [
    {
      id: 3,
      name: 'Saturno',
      description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
      image: '../../../assets/saturn.png',
      price: 90,
      stock: 5
    },
    {
      id: 4,
      name: 'Juno',
      description: 'Lorem ipsum Aut nisi laboriosam similique. Aperiam eligendi enim ipsam mollitia dolore fuga quas doloremque nemo in, illo reprehenderit.',
      image: '../../../assets/juno.jpg',
      price: 222,
      stock: 5
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
