import { GoogleMapsService } from './../../../../services/Tools/google-maps.service';
import { DoctorsService } from 'src/app/services/backend/doctors.service';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-doctor-profile',
  templateUrl: './patient-doctor-profile.component.html',
  styleUrls: ['./patient-doctor-profile.component.css']
})
export class PatientDoctorProfileComponent implements OnInit {


  currentDoctor: Doctor;

  loadingDoctor: boolean = false;
  loadingRatings: boolean = false;
  averageRating: number = 5;

  //Apis
  googleMapsUrl: string;

  constructor(
    private doctorsService: DoctorsService,
    private route: ActivatedRoute,
    private maps: GoogleMapsService
  ) { }

  ngOnInit(): void {
    

    this.route
      .params
      .subscribe((params) => {
        this.loadingDoctor = true;

        
        console.log(`--------------> ${params.id}`);

        this.doctorsService
        .getDoctorById(params.id)
        .then((doctor) => {
          this.currentDoctor = doctor;
          this.googleMapsUrl = this.maps.getLinkFromAddress(doctor.addresse);
          this.loadingDoctor = false;

          console.log(`--------------> ${doctor}`);


          this.loadDoctorRatings();
        })

      })


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
