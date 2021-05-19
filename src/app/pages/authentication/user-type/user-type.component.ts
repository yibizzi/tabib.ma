import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  destination: string;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    activatedRoute.parent?.url.subscribe((urlPath) => {
      let url = urlPath[urlPath.length - 1].path;

      this.destination = '/' +  ((url == "Signin" || url == "Signup")? url: "Signin");
    })
  }

  ngOnInit(): void {
  }


}
