import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentsConfirmedComponent } from './doctor-appointments-confirmed.component';

describe('DoctorAppointmentsConfirmedComponent', () => {
  let component: DoctorAppointmentsConfirmedComponent;
  let fixture: ComponentFixture<DoctorAppointmentsConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentsConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentsConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
