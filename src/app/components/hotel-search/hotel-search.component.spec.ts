import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSearchComponent } from './hotel-search.component';

describe('HotelSearchComponent', () => {
  let component: HotelSearchComponent;
  let fixture: ComponentFixture<HotelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
