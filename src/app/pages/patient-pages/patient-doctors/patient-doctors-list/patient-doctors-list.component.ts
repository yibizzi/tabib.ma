import { DoctorsService } from './../../../../services/backend/doctors.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/userModels/doctor.model';

type Filter = "fullName.firstName" | "fullName.lastName" | "city" | "country" | "age" | "speciality";


@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.component.html',
  styleUrls: ['./patient-doctors-list.component.css']
})
export class PatientDoctorsListComponent implements OnInit {


  filters: Filter[] = ["fullName.firstName", "fullName.lastName", "city", "country", "age", "speciality"];

  choosedFilter: Filter = "fullName.firstName";

  loadingDoctors: boolean = false;

  searchComplete: boolean = false;

  doctorsList: Doctor[];


  constructor(
    private doctorsService: DoctorsService
  ) { }

  ngOnInit(): void {
  }

  searchDoctor(query: string) {

    this.loadingDoctors = true;
    this.searchComplete = false;

    let params: {
      [key: string]: string
    } = {};

    params[this.choosedFilter] = query;

    this.doctorsService.getDoctorsList(params, 0, 10).then((doctors) => {
      this.doctorsList = doctors;
      this.loadingDoctors = false;
      this.searchComplete = true;
    });

  }

}
