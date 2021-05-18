import { Patient } from './../../../models/userModels/patient.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PatientsService } from 'src/app/services/backend/patients.service';

//temprary interface
interface UserModel {
  id: string,
  fname: string,
  lname: string,
  image: string
}
@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {

  loading: boolean = false;

  @Input('currentUser')
  patient: Patient | null;

  constructor(private patientsService: PatientsService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.patientsService
      .patient$.subscribe((patient) => {
        this.patient = patient;
      });

    this.patientsService.getPatientById(this.patient?.userId as string);


  }

  logOut() {
    this.auth.logout();
  }

}
