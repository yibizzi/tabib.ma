import { Patient } from 'src/app/models/userModels/patient.model';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/backend/patients.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';


type Filter = "fullName.firstName" | "fullName.lastName" | "city" | "country" | "age";
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  filters: Filter[] = ["fullName.firstName", "fullName.lastName", "age"];

  choosedFilter: Filter = "fullName.firstName";

  loadingPatients: boolean = false;

  searchComplete: boolean = false;



  searchInput$ = new Subject<string>();
  patientsList: Patient[];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {

    const autoSuggest$ = this.searchInput$.pipe(

      debounceTime(500),
      switchMap((text) => {
        this.loadingPatients = true;
        this.searchComplete = false;
        return this.searchPatient(text);
      })
    ).subscribe(((patients) => {
      this.patientsList = patients;
      this.loadingPatients = false;
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


  searchPatient(query: string) {

    let params: {
      [key: string]: string
    } = {};

    params[this.choosedFilter] = query;

    return this.patientsService.getPatientsList(params, 0, 10);
  }

}
