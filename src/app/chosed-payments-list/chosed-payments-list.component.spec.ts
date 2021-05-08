import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosedPaymentsListComponent } from './chosed-payments-list.component';

describe('ChosedPaymentsListComponent', () => {
  let component: ChosedPaymentsListComponent;
  let fixture: ComponentFixture<ChosedPaymentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosedPaymentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosedPaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
