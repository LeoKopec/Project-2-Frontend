import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelListingsService } from 'src/app/services/hotel-listings.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotelSubscription!: Subscription;
  hotels: Array<Hotel> = [];

  constructor(private hotelListService: HotelListingsService) { }

  ngOnInit(): void {
    this.hotelSubscription = this.hotelListService.currentHotelList.subscribe((hotels: Hotel[]) => this.hotels = hotels)
  }

}
