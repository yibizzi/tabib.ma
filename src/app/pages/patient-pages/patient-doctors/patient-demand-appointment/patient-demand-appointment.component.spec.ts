import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDemandAppointmentComponent } from './patient-demand-appointment.component';

describe('PatientDemandAppointmentComponent', () => {
  let component: PatientDemandAppointmentComponent;
  let fixture: ComponentFixture<PatientDemandAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDemandAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemandAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
