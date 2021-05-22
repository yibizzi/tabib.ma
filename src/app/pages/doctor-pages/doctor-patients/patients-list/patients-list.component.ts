import { Patient } from 'src/app/models/userModels/patient.model';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/backend/patients.service';


type Filter = "firstName" | "lastName" | "city" | "country" | "age";
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {


  filterByCity: boolean;
  filterByAge: Filter;

  filters: Filter[] = ["firstName", "lastName", "city", "country", "age"];

  choosedFilter: Filter = "firstName";



  patientsList: Patient[];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
  }



  searchPatient(query: string) {

    let params : {
      [key: string]: string
    }= {};

    params[this.choosedFilter]  = query;

    this.patientsService.getPatientsList(params, 0, 10).then((patients) => {
      this.patientsList = patients;
    });
  }

}
