import { socialMediaAccounts } from './constants';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'tabibma';
  socialMediaAccounts = socialMediaAccounts;

}
