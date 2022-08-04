import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReservationComponent } from './book-reservation.component';

describe('BookReservationComponent', () => {
  let component: BookReservationComponent;
  let fixture: ComponentFixture<BookReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
