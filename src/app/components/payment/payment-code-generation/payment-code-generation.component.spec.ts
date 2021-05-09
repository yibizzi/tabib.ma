import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCodeGenerationComponent } from './payment-code-generation.component';

describe('PaymentCodeGenerationComponent', () => {
  let component: PaymentCodeGenerationComponent;
  let fixture: ComponentFixture<PaymentCodeGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCodeGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCodeGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
