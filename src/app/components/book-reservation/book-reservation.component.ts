import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { Reservation } from 'src/app/models/reservation.model';
import { Room } from 'src/app/models/room.model';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Guest } from 'src/app/models/guest.model';
import { GuestService } from 'src/app/services/guest.service';
import { dateToDateString } from 'src/app/services/date-conversion';

@Component({
  selector: 'app-book-reservation',
  templateUrl: './book-reservation.component.html',
  styleUrls: ['./book-reservation.component.css']
})

export class BookReservationComponent implements OnInit {
  
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  hotel: Hotel = new Hotel();
  room: Room = new Room();
  startDate = new Date();
  endDate = new Date();
  totalPrice: number = 0;
  guest: Guest = new Guest();
  newReservation : Reservation = new Reservation();

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService,
    private resService: ReservationService,
    private guestService: GuestService
    ) {

    }

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    let params = this.route.snapshot.queryParamMap;
    if (params.has('hotel') && params.has('room') && params.has('start') && params.has('end')) {
      this.startDate = new Date(params.get('start') as string);
      this.endDate = new Date(params.get('end') as string)
      // Retrieve the hotel
      this.hotelService.findById(parseInt(params.get('hotel') as string)).subscribe(data => {
        this.hotel = data as Hotel;
      });
      // Retrieve the room
      this.roomService.findById(
          parseInt(params.get('room') as string),
          this.startDate,
          this.endDate).subscribe(data => {
        this.room = data as Room;
        this.totalPrice = this.room.prices.reduce((prev, curr) => prev + curr)
      });
    }
  }

  getQueryParams() {
    let params = this.route.snapshot.queryParamMap;
    if (params.has('hotel') && params.has('room') && params.has('start') && params.has('end')) {
      return {
        hotel: params.get('hotel'),
        room: params.get('room'),
        start: params.get('start'),
        end: params.get('end')
      };
    }
    return {};
  }

  saveRes(): void {
    this.guest.first_name = this.firstName;
    this.guest.last_name = this.lastName;
    this.guest.email = this.email;
    this.guest.phone = this.phone;

    this.newReservation.room_id = this.room.id;
    this.newReservation.room_name = this.room.name;
    this.newReservation.room_size = this.room.size;
    this.newReservation.first_name = this.guest.first_name;
    this.newReservation.last_name = this.guest.last_name;
    this.newReservation.start_date = dateToDateString(this.startDate);
    this.newReservation.end_date = dateToDateString(this.endDate);
    this.newReservation.total_price = this.totalPrice;
    this.newReservation.hotel_id = this.hotel.id;
    this.newReservation.hotel = this.hotel.name;
    this.newReservation.desc = this.hotel.desc;
    this.newReservation.city = this.hotel.city;
    this.newReservation.rating = this.hotel.rate;
    this.newReservation.phone = this.guest.phone;
    this.newReservation.email = this.guest.email;
    
    console.log('new reservation: ', (this.newReservation));
    this.resService.makeReservation(this.newReservation).subscribe(data => {
      this.newReservation = data;
    }, error => {
      console.log(error);
    }
    );
  }
}