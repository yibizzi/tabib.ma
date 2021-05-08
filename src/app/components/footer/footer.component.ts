import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input("socialMediaAccounts")
  socialMediaAccounts: {
    facebook?: string,
    instagram?: string,
    twitter?: string,
    linkedin?: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
