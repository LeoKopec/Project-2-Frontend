import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { FormsModule } from '@angular/forms';
import { Guest } from 'src/app/models/guest.model';
import { Room } from 'src/app/models/room.model';
@Component({
  selector: 'app-book-reservation',
  templateUrl: './book-reservation.component.html',
  styleUrls: ['./book-reservation.component.css']
})
export class BookReservationComponent implements OnInit {

  newReservation: Reservation;
  service:ReservationService;
  
  constructor(service:ReservationService,newReservation:Reservation) {
    this.service=service;
    this.newReservation=newReservation


   }

  ngOnInit(): void {
  }

  saveRes(newReservation:Reservation){
    this.service.saveReservation(newReservation).subscribe(data=>{
      console.log(data)
    })
    

  }

}
