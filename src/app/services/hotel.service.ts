import { HttpClient } from '@angular/common/http';
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

  findByParams() :Observable<any> {
    const url: string = environment.api.root + environment.api.hotel;
    return this.http.get(url);
  }
}
