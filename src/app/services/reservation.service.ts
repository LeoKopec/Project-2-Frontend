import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  http :HttpClient;
  resSubUrl :string = 'reservations/'
  editSubUrl :string = 'reservations/changes/'
  refreshrequired = new Subject<void>;

get Refreshrequired() {
  return this.refreshrequired;
}

  constructor(http :HttpClient) {
    this.http = http;
  }

  findByEmail(email :string) :Observable<any> {
    return this.http.get(environment.devUrl + this.resSubUrl + email);
  }

  deleteReservation(id :number) :Observable<any> {
    return this.http.delete(environment.devUrl + this.resSubUrl + id).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );
  }

  findById(id :number) :Observable<any> {
    return this.http.get(environment.devUrl + this.editSubUrl + id);
  }

  updateReservation(reservation :any, id :number) :Observable<any> {
    return this.http.put(environment.devUrl + this.resSubUrl + id, reservation).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );
  }
}
