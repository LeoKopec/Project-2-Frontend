import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

   save(guest: Guest): Observable<any> {
    const url: string = environment.api.root + environment.api.guest;
    return this.http.post(url, guest);
  }

  findById(id: number): Observable<any> {
    const url: string = environment.api.root + environment.api.guest + id;
    return this.http.get(url);
  }
}
