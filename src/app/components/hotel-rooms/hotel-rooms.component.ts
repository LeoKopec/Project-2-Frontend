import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { Room } from 'src/app/models/room.model';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { roundRating } from 'src/app/services/value-adjustment';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css']
})
export class HotelRoomsComponent implements OnInit {

  hotel!: Hotel;
  roundedRating: number = 0;
  rooms: Array<Room> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
    private hotelService: HotelService
    ) { }

  ngOnInit(): void {
    // Check for room search parameters
    let params = this.route.snapshot.queryParamMap;
    if (params.has('start') && params.has('end') && params.has('hotel') && params.has('size')) {
      // Retrieve the hotel
      this.hotelService.findById(parseInt(params.get('hotel') as string)).subscribe(data => {
        this.hotel = data;
        this.roundedRating = this.hotel.rate;
      });
      // Retrieve the list of hotels
      this.roomService.findByParams(
        parseInt(params.get('hotel') as string),
        new Date(params.get('start') as string),
        new Date(params.get('end') as string),
        parseInt(params.get('size') as string)
      ).subscribe(data => {
        this.rooms = data
        // this.rooms = this.rooms.filter(room => {
        //   return true;
        // });
      });

    }
  }

}
