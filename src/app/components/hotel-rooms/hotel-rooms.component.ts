import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css']
})
export class HotelRoomsComponent implements OnInit {

  rooms: Array<Room> = [];

  constructor(private router: Router, private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    // Check for room search parameters
    let params = this.route.snapshot.queryParamMap;
    if (params.has('start') && params.has('end') && params.has('hotel') && params.has('size')) {
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
