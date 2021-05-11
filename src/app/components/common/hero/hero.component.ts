import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input('title')
  title: string;
  @Input('description')
  description: string;

  @Input('button-text')
  button_text: string;

  
  @Input('background-image')
  background_image: string;

  
  @Input('side-image')
  side_image: string;


  @Input("button-routerLink")
  router_link: string;

  
  constructor() { }

  ngOnInit(): void {
  }

}
