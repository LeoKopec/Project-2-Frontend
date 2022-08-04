import { Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/models/price.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() rooms: Array<Room> = [];

  constructor() { }

  ngOnInit(): void {
  }

  totalPrice(prices: Array<number>): number {
    return prices.reduce((prev, curr) => prev + curr);
  }

}
