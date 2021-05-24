
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { PatientsService } from 'src/app/services/backend/patients.service';
import { Patient } from 'src/app/models/userModels/patient.model';

@Component({
  selector: 'app-patient-profile-details',
  templateUrl: './patient-profile-details.component.html',
  styleUrls: ['./patient-profile-details.component.css']
})
export class PatientProfileDetailsComponent implements OnInit {

  loadingPatient: boolean = false;

  patient: Patient;




  constructor(
    private patientsService: PatientsService,
    private auth: AuthService) { }

  ngOnInit(): void {

    
    this.loadingPatient = true;
    

    this.patientsService
      .patient$.subscribe((doctor) => {
        this.patient = doctor;
        this.loadingPatient = false;

      });

    this.patientsService.getPatientById(this.auth.getCurrentUser()?.userId as string);

  }


}