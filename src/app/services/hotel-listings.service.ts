import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelListingsService {

  private hotelListSource = new BehaviorSubject([] as Array<Hotel>);
  currentHotelList = this.hotelListSource.asObservable();

  constructor() { }

  changeHotelList(hotelList: Array<Hotel>) {
    this.hotelListSource.next(hotelList);
  }

}
