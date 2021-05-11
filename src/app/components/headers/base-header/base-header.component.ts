import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.css']
})
export class BaseHeaderComponent implements OnInit {

  ngOnInit() {
    this.scrolled = window.innerHeight >= document.body.clientHeight;
  }

  scrolled: boolean = false;

  mobileSideBarOpened: boolean = false;


  toggleMobileSideBar(){
    this.mobileSideBarOpened = ! this.mobileSideBarOpened;
  }

  get inTop() : boolean{
    return !(document.documentElement.scrollTop || document.body.scrollTop);
  }

}
