import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileDetailsComponent } from './doctor-profile-details.component';

describe('DoctorProfileDetailsComponent', () => {
  let component: DoctorProfileDetailsComponent;
  let fixture: ComponentFixture<DoctorProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
