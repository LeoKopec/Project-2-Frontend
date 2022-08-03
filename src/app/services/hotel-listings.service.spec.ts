import { TestBed } from '@angular/core/testing';

import { HotelListingsService } from './hotel-listings.service';

describe('HotelListingsService', () => {
  let service: HotelListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
