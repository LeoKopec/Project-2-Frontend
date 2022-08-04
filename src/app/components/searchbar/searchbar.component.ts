import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';
import { FormControl } from '@angular/forms';


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

    /**
   * Autocomplete
   * 
    myControl = new FormControl<string | City>('');
    options: City[] = [
      {loc: 'Houston'}, {loc: 'Philadelphia'}, {loc: 'New York'},
      {loc: 'Boston'}, {loc: 'San Francisco'}, {loc: 'Seattle'},
      {loc: 'Washington'}, {loc: 'Atlanta'}, {loc: 'Miami'},
      {loc: 'Orlando'}, {loc: 'Chicago'}, {loc: 'Dallas'},
    ];
    filteredOptions: Observable<City[]>;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
   */

}

/*
export interface City {
  loc: string;
}
*/