import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentsHistoryComponent } from './doctor-appointments-history.component';

describe('DoctorAppointmentsHistoryComponent', () => {
  let component: DoctorAppointmentsHistoryComponent;
  let fixture: ComponentFixture<DoctorAppointmentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
