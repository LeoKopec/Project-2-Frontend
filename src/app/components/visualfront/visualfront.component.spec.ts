import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualfrontComponent } from './visualfront.component';

describe('VisualfrontComponent', () => {
  let component: VisualfrontComponent;
  let fixture: ComponentFixture<VisualfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
