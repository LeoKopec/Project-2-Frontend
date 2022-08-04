import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.model';
import { nightlyPrice, roundRating } from 'src/app/services/value-adjustment';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hotels: Array<Hotel> = [];
  @Input() start!: Date;
  @Input() end!: Date;
  nightlyPrice = nightlyPrice;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  roundRating = roundRating

  onHotelRoomsRequest(hotel: Hotel) {
    let queryParams: {[x: string]: unknown} = {hotel: hotel.id}
    let currParams = this.route.snapshot.queryParamMap;
    for (const prop of ['start', 'end', 'size']) {
      if (currParams.has(prop)) {
        queryParams[prop] = currParams.get(prop);
      }
    }
    this.router.navigate(['/hotel-rooms'], {queryParams: queryParams });
  }

}
