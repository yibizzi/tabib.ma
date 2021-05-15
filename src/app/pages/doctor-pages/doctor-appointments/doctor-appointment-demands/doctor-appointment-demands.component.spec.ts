import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentDemandsComponent } from './doctor-appointment-demands.component';

describe('DoctorAppointmentDemandsComponent', () => {
  let component: DoctorAppointmentDemandsComponent;
  let fixture: ComponentFixture<DoctorAppointmentDemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDemandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
