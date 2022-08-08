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
  room: any = new Room();
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

  getPrefilledData() {
    var hotel_id: number = parseInt(this.getQueryParams().hotel as string);
    this.hotelService.findById(hotel_id).subscribe(data => {
      this.hotel = data;
    });

    var tempStart = this.getQueryParams().start as string;
    var tempEnd = this.getQueryParams().end as string;

    this.startDate = new Date(parseInt(tempStart.split('-')[0]), parseInt(tempStart.split('-')[1]), parseInt(tempStart.split('-')[2]));
    this.endDate = new Date(parseInt(tempEnd.split('-')[0]), parseInt(tempEnd.split('-')[1]), parseInt(tempEnd.split('-')[2]));
    
    console.log(new Date(2022, 12, 20));
    
    var room_id: number = parseInt(this.getQueryParams().room as string);
    console.log('room : ', this.roomService.findRoomForRes(room_id));
    // this.roomService.findById(room_id, this.startDate, this.endDate).subscribe(data => {
    //   this.room = data;
    // });
    this.roomService.findRoomForRes(room_id).subscribe(data => {
          this.room = data;
        });

  }


  saveRes(): void {
    this.getPrefilledData();
    this.guest.first_name = this.firstName;
    this.guest.last_name = this.lastName;
    this.guest.email = this.email;
    this.guest.phone = this.phone;
    this.guestService.save(this.guest).subscribe(data => {
      this.guest = data;
    });

    this.newReservation.room_id = this.room.id;
    this.newReservation.room_name = this.room.name;
    this.newReservation.room_size = this.room.size;
    this.newReservation.first_name = this.guest.first_name;
    this.newReservation.last_name = this.guest.last_name;
    this.newReservation.start_date = new Date(this.startDate);
    this.newReservation.end_date = new Date(this.endDate);

    // this.newReservation.total_price = this.room.prices.reduce((a, b) => a + b);

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