import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { Reservation } from 'src/app/models/reservation.model';
import { Room } from 'src/app/models/room.model';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-book-reservation',
  templateUrl: './book-reservation.component.html',
  styleUrls: ['./book-reservation.component.css']
})
export class BookReservationComponent implements OnInit {

  hotel?: Hotel;
  room?: Room;
  newReservation!: Reservation;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService
    ) { }

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    let params = this.route.snapshot.queryParamMap;
    if (params.has('hotel') && params.has('room') && params.has('start') && params.has('end')) {
      // Retrieve the hotel
      this.hotelService.findById(parseInt(params.get('hotel') as string)).subscribe(data => {
        this.hotel = data;
        if (this.hotel) {
          this.newReservation.hotel_id = this.hotel.id;
          this.newReservation.hotel = this.hotel.name
          this.newReservation.desc = this.hotel.desc;
          this.newReservation.city = this.hotel.city;
          this.newReservation.rating = this.hotel.rate;
          console.log(this.hotel);
        }
      });
      // Retrieve the room
      // this.roomService.findById(parseInt(params.get('room') as string)).subscribe(data => {
      //   this.room = data;
      //   if (this.room) {
      //     this.newReservation.room_id = this.room.id;
      //     this.newReservation.room_name = this.room.name;
      //     this.newReservation.room_size = this.room.size;
      //   }
      // });
    }
  }

}
