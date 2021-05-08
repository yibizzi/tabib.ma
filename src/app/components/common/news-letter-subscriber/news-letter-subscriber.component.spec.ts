import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterSubscriberComponent } from './news-letter-subscriber.component';

describe('NewsLetterSubscriberComponent', () => {
  let component: NewsLetterSubscriberComponent;
  let fixture: ComponentFixture<NewsLetterSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetterSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
