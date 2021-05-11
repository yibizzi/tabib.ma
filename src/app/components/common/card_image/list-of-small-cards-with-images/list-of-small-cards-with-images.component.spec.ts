import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSmallCardsWithImagesComponent } from './list-of-small-cards-with-images.component';

describe('ListOfSmallCardsWithImagesComponent', () => {
  let component: ListOfSmallCardsWithImagesComponent;
  let fixture: ComponentFixture<ListOfSmallCardsWithImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSmallCardsWithImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSmallCardsWithImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
