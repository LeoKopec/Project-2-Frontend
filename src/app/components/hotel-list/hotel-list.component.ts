import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hotels: Array<Hotel> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  roundRating(hotel: Hotel): number {
    return Math.round(hotel.rate);
  }

  onHotelRoomsRequest(hotel: Hotel) {
    this.router.navigate(['/hotel-rooms'], {queryParams: { hotel: hotel.id } });
  }

}
