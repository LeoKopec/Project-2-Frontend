import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';

@Component({
  selector: 'app-book-reservation',
  templateUrl: './book-reservation.component.html',
  styleUrls: ['./book-reservation.component.css']
})
export class BookReservationComponent implements OnInit {

  newReservation!: Reservation;

  constructor() { }

  ngOnInit(): void {
  }

}
