import { Component, OnInit } from '@angular/core';


/**
 * A component that will carry all the other components that would appear in the home page
 */
@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
