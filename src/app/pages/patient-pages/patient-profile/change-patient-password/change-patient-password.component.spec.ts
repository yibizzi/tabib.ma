import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePatientPasswordComponent } from './change-patient-password.component';

describe('ChangePatientPasswordComponent', () => {
  let component: ChangePatientPasswordComponent;
  let fixture: ComponentFixture<ChangePatientPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePatientPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePatientPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
