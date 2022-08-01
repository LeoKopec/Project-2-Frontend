import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByEmalComponent } from './find-by-email.component';

describe('FindByEmalComponent', () => {
  let component: FindByEmalComponent;
  let fixture: ComponentFixture<FindByEmalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByEmalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByEmalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
