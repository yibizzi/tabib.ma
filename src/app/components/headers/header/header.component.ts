import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = true;

  type: "patient" | "doctor" | null = 'doctor';

  constructor(private auth: AuthService,
    private router: Router) {



  }

  ngOnInit(): void {

    this.auth.isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    this.auth.userType.subscribe((userType) => {
      this.type = userType;
    })
  }

}
