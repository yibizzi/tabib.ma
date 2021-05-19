import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupPageFormComponent } from './singup-page-form.component';

describe('SingupPageFormComponent', () => {
  let component: SingupPageFormComponent;
  let fixture: ComponentFixture<SingupPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
