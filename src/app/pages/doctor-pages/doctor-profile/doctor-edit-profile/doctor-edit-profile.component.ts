import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { DoctorsService } from 'src/app/services/backend/doctors.service';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit {

  loadingDoctor: boolean = false;

  loadingRatings = false;

  currentDoctor: Doctor;

  constructor(private doctorsService: DoctorsService,) { }

  ngOnInit(): void {

    this.doctorsService
    .currentDoctor$.subscribe((doctor) => {
      this.currentDoctor = doctor;
      this.loadingDoctor = false;

    });

  this.doctorsService.getDoctorById(this.currentDoctor?.userId as string);

  }

}
