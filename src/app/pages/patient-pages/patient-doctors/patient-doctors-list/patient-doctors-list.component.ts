import { Observable, Subject } from 'rxjs';
import { DoctorsService } from './../../../../services/backend/doctors.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { debounceTime, switchMap } from 'rxjs/operators';

type Filter = "fullName.firstName" | "fullName.lastName" | "city" | "country" | "age" | "speciality";


@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.component.html',
  styleUrls: ['./patient-doctors-list.component.css']
})
export class PatientDoctorsListComponent implements OnInit {


  filters: Filter[] = ["fullName.firstName", "fullName.lastName", "city", "country", "age", "speciality"];

  filterNames = {
    "fullName.firstName": "First name",
    "fullName.lastName": "Last name",
    "city": "city",
    "country": "country",
    "age": "age",
    "speciality": "speciality"
  }

  choosedFilter: Filter = "fullName.firstName";

  loadingDoctors: boolean = false;

  searchComplete: boolean = false;



  doctorsList: Doctor[];


  searchInput$ = new Subject<string>();


  constructor(
    private doctorsService: DoctorsService
  ) {
  }

  ngOnInit(): void {
    const autoSuggest$ = this.searchInput$.pipe(

      debounceTime(500),
      switchMap((text) => {
        this.loadingDoctors = true;
        this.searchComplete = false;
        return this.searchDoctor(text);
      })
    ).subscribe(((doctors) => {
      this.doctorsList = doctors;
      this.loadingDoctors = false;
      this.searchComplete = true;
    }));
  }

  onInputChange(partialQuery: string) {

    if (partialQuery.length < 3) return;
    this.searchInput$.next(partialQuery);
  }

  onEnterClick(query: string) {
    this.searchInput$.next(query);
  }

  searchDoctor(query: string) {

    let params: {
      [key: string]: string
    } = {};

    params[this.choosedFilter] = query;

    return this.doctorsService
      .getDoctorsList(params, 0, 10);

  }

}
