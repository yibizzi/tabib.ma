import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTimeComponent } from './validate-time.component';

describe('ValidateTimeComponent', () => {
  let component: ValidateTimeComponent;
  let fixture: ComponentFixture<ValidateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
