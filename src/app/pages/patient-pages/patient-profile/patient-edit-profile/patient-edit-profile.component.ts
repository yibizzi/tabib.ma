import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/userModels/patient.model';
import { PatientsService } from 'src/app/services/backend/patients.service';
import * as moment from 'moment';
import { ImagesServiceService } from 'src/app/services/images-service.service';

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
    private auth: AuthService,
    private imagesService: ImagesServiceService) {

    this.form = fb.group({
      ProfileImg: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      bday: ['', Validators.required],

      address: fb.group({
        details: ['', [Validators.required, Validators.minLength(8)]],
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
  get details() {
    return this.address?.get('details');
  }
  get city() {
    return this.address?.get('city');
  }
  get country() {
    return this.address?.get('country');
  }

  get ProfileImg() {
    return this.form.get('ProfileImg');

  }

  ngOnInit(): void {


    this.loadingPatient = true;
    this.patientsService
      .patient$.subscribe((patient) => {
        this.patient = patient;
        this.loadingPatient = false;

      });

    this.patientsService.getPatientById(this.auth.getCurrentUser()?.userId as string);

  }
  handleImageInput(InputEvent: Event) {

    this.imagesService.encodeImageFileAsBase64((InputEvent?.target as HTMLInputElement)?.files?.item(0)).then((base64Image) => {
      this.ProfileImg?.setValue(base64Image);

      this.ProfileImg?.markAsDirty();
    });
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

    if (formChanges.bday) {
      formChanges.age = moment().diff(formChanges.bday, 'years')
      delete formChanges.bday;
    }

    this.patient.updateInfos(formChanges);


    this.patientsService.updatePatient(this.patient).then((value) => {
      this.savingInfos = false;
    });
  }

  cancel() {
    this.form.reset();
    this.ngOnInit();
  }


  changeDoctorPassword(oldPassword: string, newPassword: string) {

  }

}