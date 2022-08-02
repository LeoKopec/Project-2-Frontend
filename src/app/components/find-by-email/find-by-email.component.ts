import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';


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

  @Input() editId: number;

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

  goTo(id :number) {
    this.router.navigate(['/editReservation']);
  }

}
