import { Component, OnInit, Input } from '@angular/core';


interface cardItem {
  title?: string,
  description?: string,
  image?: string,
  router_link?: string,
  stillLoading?: boolean
}
@Component({
  selector: 'app-list-of-small-cards-with-images',
  templateUrl: './list-of-small-cards-with-images.component.html',
  styleUrls: ['./list-of-small-cards-with-images.component.css']
})
export class ListOfSmallCardsWithImagesComponent implements OnInit {

  @Input("title")
  title: string;


  @Input("items")
  items: cardItem[];




  constructor() { }

  ngOnInit(): void {
  }

}
