import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { Patient } from 'src/app/models/userModels/patient.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isAuthenticated: boolean = false;

  type: "patient" | "doctor" | null = 'patient';

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.auth.isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;

      if (isAuthenticated) {
        let currentUser = this.auth.getCurrentUser();
        this.type = currentUser instanceof Doctor ?
          "doctor"
          :
          "patient";

      }
    });
  }

}
