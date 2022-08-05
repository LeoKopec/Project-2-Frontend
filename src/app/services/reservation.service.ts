import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dateToDateString } from './date-conversion';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  http :HttpClient;
  resSubUrl :string = 'reservations/'
  editSubUrl :string = 'reservations/changes/'
  roomsSubUrl :string = "rooms/"
  refreshrequired = new Subject<void>;
  

  get Refreshrequired() {
    return this.refreshrequired;
  }

  constructor(http :HttpClient) {
    this.http = http;
  }

  findByEmail(email :string) :Observable<any> {
    return this.http.get(environment.api.root + environment.api.reser + email);
  }

  deleteReservation(id :number) :Observable<any> {
    return this.http.delete(environment.api.root + environment.api.reser + id).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );
  }

  findById(id :number) :Observable<any> {
    return this.http.get(environment.api.root + environment.api.reser + 'changes/' + id);
  }

  updateReservation(reservation :any, id :number) :Observable<any> {
    return this.http.put(environment.api.root + environment.api.reser + id, reservation).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );
  }

  findPrice(id: number, startDate :string, endDate :string) :Observable<any> {
    let params = new HttpParams();
    params = params.append("start", startDate);
    params = params.append("end", endDate); 
    return this.http.get(environment.api.root + environment.api.room + id + '/pricing', {params:params})

  }

  makeReservation(reservation :any) :Observable<any> {
    return this.http.post(environment.api.root + environment.api.reser, reservation).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );
  }
}
