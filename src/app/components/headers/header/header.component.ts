import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { Patient } from 'src/app/models/userModels/patient.model';
import { User } from 'src/app/models/userModels/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false;

  type: "patient" | "doctor" | null = 'doctor';

  currentPatient: Patient;
  currentDoctor: Doctor;



  constructor(private auth: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.auth.isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    this.auth.userType.subscribe((userType) => {
      this.type = userType;

      switch (this.type) {
        case 'doctor':
          this.currentDoctor = this.auth.getCurrentUser() as Doctor; break;

        default:
          this.currentPatient = this.auth.getCurrentUser() as Patient; break;
      };
    });
  }

}
