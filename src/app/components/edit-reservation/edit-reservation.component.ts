import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {

  @Input() editId: number;

  constructor() {
    this.editId = 0
   }

  ngOnInit(): void {
  }

}
