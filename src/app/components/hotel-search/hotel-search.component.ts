import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  hotels: Array<Hotel> = [];
  start: Date = new Date();
  end: Date = new Date();

  constructor(private router: Router, private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.refreshHotels();

    //Bind to event on query params update
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.refreshHotels();
      }
    });
  }

  refreshHotels() {
    // Check for hotel search parameters
    let params = this.route.snapshot.queryParamMap;
    if (params.has('start') && params.has('end') && params.has('location') && params.has('size')) {
      // Retrieve the list of hotels
      this.start = new Date(params.get('start') as string);
      this.end = new Date(params.get('end') as string);
      this.hotelService.findByParams(
        this.start,
        this.end,
        params.get('location') as string,
        parseInt(params.get('size') as string)
      ).subscribe(data => {
        this.hotels = data
        this.hotels = this.hotels.filter(hotel => {
          return hotel.lowestPrice > 0;
        });
      });
    }
  }

}
