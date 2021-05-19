import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup } from '@angular/forms';
import { PasswordValidators } from './PasswordValidators';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from 'src/app/models/userModels/patient.model';
import { LeadingComment } from '@angular/compiler';
import { Doctor } from 'src/app/models/userModels/doctor.model';

interface signUpUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  bday: string,
  phoneNumber: string
}

@Component({
  selector: 'app-singup-page-form',
  templateUrl: './singup-page-form.component.html',
  styleUrls: ['./singup-page-form.component.css']
})
export class SingupPageFormComponent {

  form: FormGroup;

  errors: "passwordsMatch" | "serverError" | null;

  constructor(fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {


    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      bday: ['', Validators.required],
      speciality: ['', Validators.required],
      passwords: fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        cpassword: ['', [Validators.required, Validators.minLength(8)]]
      }, {
        validators: PasswordValidators.mustMatch as ValidatorFn
      }
      )
    });
  }


  signUp() {

    switch (this.userType) {
      case "patient":
        this.signUpPatient();
        break;
      case "doctor":
        this.signUpDoctor();
        break;
    }



  }

  get passwords() {
    return this.form.get('passwords');
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
  get password() {
    return this.passwords?.get('password');
  }
  get cpassword() {
    return this.passwords?.get('cpassword');
  }

  get speciality(){
    return this.form.get('speciality');

  }

  get userType(): "patient" | "doctor" {


    let userTypeFromUrl = this.route.snapshot.paramMap.get('userType');

    let userType: "patient" | "doctor" = (userTypeFromUrl == "doctor" || userTypeFromUrl == "patient") ? userTypeFromUrl : "patient";

    return userType;

  }

  signUpPatient() {
    let patient: Patient = new Patient({
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      phoneNumber: this.phoneNumber?.value,
      email: this.email?.value,
      password: this.password?.value,
      age: moment().diff(this.bday?.value, 'years'),
    });

    this.auth
      .createNewPatient(patient)
      .then((value) => {
        //after signup& login navigate to homepage.
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.error(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            // TODO: extract errors here and match onto the form
            this.form.setErrors({
              serverError: true
            });

          }
        }
      });;
  }

  signUpDoctor() {

    let doctor: Doctor = new Doctor({
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      phoneNumber: this.phoneNumber?.value,
      email: this.email?.value,
      password: this.password?.value,
      age: moment().diff(this.bday?.value, 'years'),
      speciality: this.speciality?.value
    });

    this.auth
      .createNewDoctor(doctor)
      .then((value) => {
        //after signup& login navigate to homepage.
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.error(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            // TODO: extract errors here and match onto the form
            this.form.setErrors({
              serverError: true
            });

          }
        }
      });;


  }

}
