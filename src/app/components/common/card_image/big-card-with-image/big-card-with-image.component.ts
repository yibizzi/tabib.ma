import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-with-image',
  templateUrl: './big-card-with-image.component.html',
  styleUrls: ['./big-card-with-image.component.css']
})
export class BigCardWithImageComponent {
  @Input('title')
  title: string;

  @Input('description')
  description: string;

  @Input('details')
  details: string; 

  @Input('imagePath')
  imagePath: string;

  //image position, default is right
  @Input('imagePosition')
  imagePosition: "left" | "right" = "right";

  constructor() { }

}
