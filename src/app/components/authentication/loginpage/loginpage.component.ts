import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router){}

  login(data: {
    email: string,
    password: string,
    rememberMe: boolean
  }) {
    console.log(data);
    this.router.navigate(["patientHome"]);

  }
}
