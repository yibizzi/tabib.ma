import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent {

  login(data: {
    email: string,
    password: string,
    rememberMe: boolean
  }) {
    console.log(data)

  }
}
