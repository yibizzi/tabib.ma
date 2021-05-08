import { Component, OnInit, Input } from '@angular/core';

interface card {
  imagePath: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.css']
})
export class ListOfCardsComponent implements OnInit {

  @Input("title")
  title: string;

  @Input("smallTitle")
  smallTitle: string;

  @Input("cards")
  cardsDetails: card[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
