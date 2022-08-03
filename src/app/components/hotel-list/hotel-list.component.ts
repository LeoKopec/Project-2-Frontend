import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hotels: Array<Hotel> = [];

  constructor() { }

  ngOnInit(): void {

  }

  roundRating(n: number): number {
    return Math.round(n);
  }

}
