import { Subscription } from 'rxjs';
import { GoogleMapsService } from './../../../../services/Tools/google-maps.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentsService } from 'src/app/services/backend/appointments.service';
import { DoctorsService } from 'src/app/services/backend/doctors.service';
import { PatientsService } from 'src/app/services/backend/patients.service';

@Component({
  selector: 'app-doctor-profile-details',
  templateUrl: './doctor-profile-details.component.html',
  styleUrls: ['./doctor-profile-details.component.css']
})
export class DoctorProfileDetailsComponent implements OnInit, OnDestroy {

  loadingDoctor: boolean = false;

  loadingRatings = false;

  currentDoctor: Doctor;

  averageRating: number = 3.5;

  //Apis
  googleMapsUrl : string;

  
  private docSubscription: Subscription;


  constructor(
    private doctorsService: DoctorsService,
    private auth: AuthService,
    private maps: GoogleMapsService) { }

  ngOnInit(): void {

    
    this.loadingDoctor = true;
    
    this.loadingRatings = true;

    this.docSubscription = this.doctorsService
      .currentDoctor$.subscribe((doctor) => {
        this.currentDoctor = doctor;
        this.googleMapsUrl = this.maps.getLinkFromAddress(doctor.addresse);
        this.loadingDoctor = false;

        console.log(this.currentDoctor)

        this.loadDoctorRatings();

      });

    this.doctorsService.getCurrentDoctorById(this.auth.getCurrentUser()?.userId as string);

  }

  ngOnDestroy(){
    this.docSubscription.unsubscribe();
  }

  loadDoctorRatings() {

    if (this.currentDoctor.userId) this.doctorsService.getDoctorRatings(this.currentDoctor.userId)
    
    .then((rating) => {
      this.currentDoctor.updateInfos({
        "rating": rating
      })

      this.averageRating = rating.averageRating;
      
      this.loadingRatings = false;
    });

  }

}
