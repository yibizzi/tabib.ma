import { ImagesServiceService } from './../../../../services/images-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { DoctorsService } from 'src/app/services/backend/doctors.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit, OnDestroy {

  docSubscription: Subscription;

  loadingDoctor: boolean = false;

  savingInfos: boolean = false;

  showError = false;
  currentDoctor: Doctor;


  form: FormGroup;


  constructor(fb: FormBuilder,
    private doctorsService: DoctorsService,
    private auth: AuthService,
    private imagesService: ImagesServiceService) {

    this.form = fb.group({

      profileImg: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      bday: ['', Validators.required],
      speciality: ['', Validators.required],

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

  get speciality() {
    return this.form.get('speciality');

  }

  get profileImg() {
    return this.form.get('profileImg');

  }


  ngOnInit(): void {


    this.loadingDoctor = true;
    this.docSubscription = this.doctorsService
      .currentDoctor$.subscribe((doctor) => {
        this.currentDoctor = doctor;
        this.loadingDoctor = false;

      });

    this.doctorsService.getCurrentDoctorById(this.auth.getCurrentUser()?.userId as string);

  }


  ngOnDestroy() {

    this.docSubscription.unsubscribe();

  }

  handleImageInput(InputEvent: Event) {

    this.imagesService.encodeImageFileAsBase64((InputEvent?.target as HTMLInputElement)?.files?.item(0)).then((base64Image) => {
      this.profileImg?.setValue(base64Image);

      this.profileImg?.markAsDirty();
    });
  }


  updateDoctorInfos() {

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

    this.currentDoctor.updateInfos(formChanges);


    this.doctorsService.updateDoctor(this.currentDoctor)
      .then((value) => {
        this.savingInfos = false;
        this.ngOnInit();
      })
      .catch((error) => {
        this.showError = true;
        this.savingInfos = false;
      });
  }

  cancel() {
    this.form.reset();
  }

  log() {
    console.log(this.form.value);
  }


  changeDoctorPassword(oldPassword: string, newPassword: string) {

  }

}
