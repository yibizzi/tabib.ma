import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsHistoryPageComponent } from './appointments-history-page.component';

describe('AppointmentsHistoryPageComponent', () => {
  let component: AppointmentsHistoryPageComponent;
  let fixture: ComponentFixture<AppointmentsHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsHistoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
