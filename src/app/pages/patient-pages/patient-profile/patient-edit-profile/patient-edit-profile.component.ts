import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/userModels/patient.model';
import { PatientsService } from 'src/app/services/backend/patients.service';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-edit-profile',
  templateUrl: './patient-edit-profile.component.html',
  styleUrls: ['./patient-edit-profile.component.css']
})
export class PatientEditProfileComponent implements OnInit { 
  loadingPatient: boolean = false;

  savingInfos: boolean = false;


  patient: Patient;


  form: FormGroup;


  constructor(fb: FormBuilder,
    private patientsService: PatientsService,
    private auth: AuthService) {

    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      bday: ['', Validators.required],

      address: fb.group({
        street: ['', [Validators.required, Validators.minLength(8)]],
        city: ['', [Validators.required, Validators.minLength(8)]],
        country: ['', [Validators.required, Validators.minLength(8)]]
      }
      )
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  get email() {
    return this.form.get('email');
  }
  get bday() {
    return this.form.get('bday');
  }
  get description() {
    return this.form.get('description');
  }
  get address() {
    return this.form.get('address');
  }
  get street() {
    return this.address?.get('street');
  }
  get city() {
    return this.address?.get('city');
  }
  get country() {
    return this.address?.get('country');
  }



  ngOnInit(): void {


    this.loadingPatient = true;
    this.patientsService
      .patient$.subscribe((patient) => {
        this.patient= patient;
        this.loadingPatient = false;

      });

    this.patientsService.getPatientById(this.auth.getCurrentUser()?.userId as string);

  }


  updatePatientInfos() {

    this.savingInfos = true;

    let formChanges: {
      [key: string]: any
    } = {

    };


    //Get fields that have changed and that are not null
    Object.keys(this.form.value).filter((controlName) => this.form.controls[controlName].dirty && this.form.controls[controlName].value)
      .forEach((controlName) => {
        formChanges[controlName] = this.form.controls[controlName].value;
      });

    if(formChanges.bday){
      formChanges.age = moment().diff(formChanges.bday, 'years')
      delete formChanges.bday;
    }

    this.patient.updateInfos(formChanges);


    this.patientsService.updatePatient(this.patient).then((value)=>{
      this.savingInfos = false;
    });
  }

  cancel() {

  }


  changeDoctorPassword(oldPassword: string, newPassword: string) {

  }

}