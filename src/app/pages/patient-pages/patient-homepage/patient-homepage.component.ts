import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/backend/patients.service';
import { Patient } from 'src/app/models/userModels/patient.model';

@Component({
  selector: 'app-patient-homepage',
  templateUrl: './patient-homepage.component.html',
  styleUrls: ['./patient-homepage.component.css']
})
export class PatientHomepageComponent implements OnInit {

  patient : Patient;

  constructor(
    private authService: AuthService,
    private patientsService: PatientsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.patientsService
    .patient$.subscribe((patient) => {
      this.patient = patient;
    });

  }

}
