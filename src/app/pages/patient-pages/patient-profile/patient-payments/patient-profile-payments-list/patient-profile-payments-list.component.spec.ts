import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfilePaymentsListComponent } from './patient-profile-payments-list.component';

describe('PatientProfilePaymentsListComponent', () => {
  let component: PatientProfilePaymentsListComponent;
  let fixture: ComponentFixture<PatientProfilePaymentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfilePaymentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfilePaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
