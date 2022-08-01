import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findByParams(startDate: Date, endDate: Date, city: string, size: number) :Observable<any> {
    const url: string = environment.api.root + environment.api.hotel;
    let params = new HttpParams();
    params.append("start", dateToDateString(startDate));
    params.append("end", dateToDateString(endDate));
    params.append("location", city);
    params.append("size", size);
    return this.http.get(url);
  }
}
