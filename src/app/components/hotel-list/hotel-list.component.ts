import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotelService: HotelService;
  hotels: Array<Hotel> = [];

  constructor(hotelService: HotelService) {
    this.hotelService = hotelService;
  }

  ngOnInit(): void {
    this.refreshHotels();
    console.log(this.hotels);
  }

  refreshHotels(): void {
    this.hotelService.findByParams(new Date("2022-08-24"), new Date("2022-08-25"), "New York", 2).subscribe(data => {
      console.log(data);
      this.hotels = data;
    })
  }

}
