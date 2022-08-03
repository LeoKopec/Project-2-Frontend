import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dateToDateString } from './date-conversion';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  findByParams(startDate: Date, endDate: Date, city: string, size: number) :Observable<any> {
    const url: string = environment.api.root + environment.api.hotel;
    let params = new HttpParams();
    params = params.append("start", dateToDateString(startDate));
    params = params.append("end", dateToDateString(endDate));
    params = params.append("location", city);
    params = params.append("size", size);
    return this.http.get(url, {params: params});
  }
}
