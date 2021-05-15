import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileCardComponent } from './doctor-profile-card.component';

describe('DoctorProfileCardComponent', () => {
  let component: DoctorProfileCardComponent;
  let fixture: ComponentFixture<DoctorProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
