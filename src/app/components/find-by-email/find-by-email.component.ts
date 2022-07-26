import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-by-email',
  templateUrl: './find-by-email.component.html',
  styleUrls: ['./find-by-email.component.css'],
})
export class FindByEmalComponent implements OnInit {

  service :ReservationService;
  searchEmail :string;
  reservations :Array<any> = [];
  deleteNum :number;
  editId :number;
  myReservation :any;
  updatedReservation :any = {};
  price :number = 0;

  constructor(service :ReservationService, private router: Router) {
    this.service = service;
    this.searchEmail = '';
    this.deleteNum = 0;
    this.editId = 0;

  }

  ngOnInit(): void {
  }


  onChange(): void {
    this.service.findByEmail(this.searchEmail).subscribe(data => {
      this.reservations = data;
    });
    this.service.Refreshrequired.subscribe(response => {
      this.service.findByEmail(this.searchEmail).subscribe(data => {
        this.reservations = data;
      });
    })
  }

  onDelete(id :number): void {
    this.service.deleteReservation(id).subscribe(data => {
      console.log(data);
    });
  }

  goTo() {
    this.router.navigate(['/edit-reservation']);
  }

  changeValue(id :number) {
    this.editId = id;
    this.service.findById(id).subscribe(data => {
      this.myReservation = data;
    })
  }

  submit(reservation :any, id :number) :void {
    this.service.updateReservation(reservation, id).subscribe(resp => {
      console.log(resp);
    });
  }

  convertRes(reservation :any) {
    this.updatedReservation = Object.assign({}, reservation);
  }

  getPrice(startDate :string, endDate :string, id :number) {
    this.service.findPrice(id, startDate, endDate).subscribe(data => {
      console.log(data);
      this.price = data;
      this.updatedReservation.total_price = this.price;
    });
    console.log(this.price);
  }

}
