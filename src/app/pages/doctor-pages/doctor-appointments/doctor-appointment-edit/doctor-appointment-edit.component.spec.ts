import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentEditComponent } from './doctor-appointment-edit.component';

describe('DoctorAppointmentEditComponent', () => {
  let component: DoctorAppointmentEditComponent;
  let fixture: ComponentFixture<DoctorAppointmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
