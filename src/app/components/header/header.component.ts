import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    this.scrolled = window.innerHeight >= document.body.clientHeight;
  }

  scrolled: boolean = false;

  get inTop() : boolean{
    return !(document.documentElement.scrollTop || document.body.scrollTop);
  }

}
