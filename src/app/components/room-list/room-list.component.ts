import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Price } from 'src/app/models/price.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() rooms: Array<Room> = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  totalPrice(prices: Array<number>): number {
    return prices.reduce((prev, curr) => prev + curr);
  }

  onRoomReservation(room: Room) {
    let queryParams: {[x: string]: unknown} = {room: room.id}
    let currParams = this.route.snapshot.queryParamMap;
    for (const prop of ['start', 'end', 'hotel']) {
      if (currParams.has(prop)) {
        queryParams[prop] = currParams.get(prop);
      }
    }
    this.router.navigate(['/book-reservation'], {queryParams: queryParams });
  }

}
