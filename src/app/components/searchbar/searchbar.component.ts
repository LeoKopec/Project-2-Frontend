import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  city: string = '';
  start: Date = new Date();
  end: Date = new Date();
  size: number = 0;
  params: Array<any> = [];

  

  hotels : Array<Hotel> = [];

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

  getHotels(): void {
    console.log(this.city, this.start, this.end, this.size);
  }

  goToListings(): void {
    this.params = [this.city, this.start, this.end, this.size];
    console.log(this.params)
    this.router.navigate(['/hotel-search'], { queryParams: { start: this.start, end: this.end, location: this.city, size: this.size } });
  }

}
