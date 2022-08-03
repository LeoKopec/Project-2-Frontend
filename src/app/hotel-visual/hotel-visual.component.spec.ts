import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelVisualComponent } from './hotel-visual.component';

describe('HotelVisualComponent', () => {
  let component: HotelVisualComponent;
  let fixture: ComponentFixture<HotelVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
