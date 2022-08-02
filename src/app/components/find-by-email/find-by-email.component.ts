import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-find-by-email',
  templateUrl: './find-by-email.component.html',
  styleUrls: ['./find-by-email.component.css']
})
export class FindByEmalComponent implements OnInit {

  service :ReservationService;
  searchEmail :string;
  reservations :Array<any> = [];
  deleteNum :number;

  constructor(service :ReservationService) {
    this.service = service;
    this.searchEmail = '';
    this.deleteNum = 0;
  }

  ngOnInit(): void {
  }

  onChange(): void {
    this.service.findByEmail(this.searchEmail).subscribe(data => {
      this.reservations = data;
    });
  }

  onDelete(): void {
    this.service.deleteReservation(this.deleteNum).subscribe(data => {
      console.log(data);
    });
  }

}
