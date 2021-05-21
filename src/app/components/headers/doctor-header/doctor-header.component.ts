import { Router } from '@angular/router';
import { DoctorsService } from './../../../services/backend/doctors.service';
import { Doctor } from './../../../models/userModels/doctor.model';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

//temprary interface
interface UserModel {
  id: string,
  fname: string,
  lname: string,
  image: string
}
@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent implements OnInit {

  @Input('currentUser')
  doctor: Doctor | null;

  constructor(private doctorsService: DoctorsService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {


    this.doctorsService
      .currentDoctor$.subscribe((doctor) => {
        this.doctor = doctor;
      });

    this.doctorsService.getCurrentDoctorById(this.doctor?.userId as string);

  }

  logOut() {
    this.auth.logout();
  }

}
