import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPaymentsComponent } from './patient-payments.component';

describe('PatientPaymentsComponent', () => {
  let component: PatientPaymentsComponent;
  let fixture: ComponentFixture<PatientPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
