import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hotels: Array<Hotel> = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  roundRating(hotel: Hotel): number {
    return Math.round(hotel.rate);
  }

  onHotelRoomsRequest(hotel: Hotel) {
    let queryParams: {[x: string]: unknown} = {hotel: hotel.id}
    let currParams = this.route.snapshot.queryParamMap;
    for (const prop of ['start', 'end', 'size']) {
      console.log(prop)
      if (currParams.has(prop)) {
        queryParams[prop] = currParams.get(prop);
      }
    }
    this.router.navigate(['/hotel-rooms'], {queryParams: queryParams });
  }

}
