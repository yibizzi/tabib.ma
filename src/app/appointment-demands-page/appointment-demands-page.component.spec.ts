import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDemandsPageComponent } from './appointment-demands-page.component';

describe('AppointmentDemandsPageComponent', () => {
  let component: AppointmentDemandsPageComponent;
  let fixture: ComponentFixture<AppointmentDemandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDemandsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDemandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
