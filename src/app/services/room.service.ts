import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dateToDateString } from './date-conversion';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  findByParams(hotelId: number, startDate: Date, endDate: Date, size: number) :Observable<any> {
    const url: string = environment.api.root + environment.api.hotel + "/" + hotelId + environment.api.room;
    let params = new HttpParams();
    params = params.append("start", dateToDateString(startDate));
    params = params.append("end", dateToDateString(endDate));
    params = params.append("size", size);
    return this.http.get(url, {params: params});
  }
}
