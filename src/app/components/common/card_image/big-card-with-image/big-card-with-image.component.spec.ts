import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardWithImageComponent } from './big-card-with-image.component';

describe('BigCardWithImageComponent', () => {
  let component: BigCardWithImageComponent;
  let fixture: ComponentFixture<BigCardWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardWithImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
