import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  http :HttpClient;
  resSubUrl :string = 'reservations/'

  constructor(http :HttpClient) {
    this.http = http;
  }

  findByEmail(email :string) :Observable<any> {
    return this.http.get(environment.devUrl + this.resSubUrl + email);
  }
}
