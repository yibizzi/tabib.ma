import { Doctor } from './../models/userModels/doctor.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/userModels/patient.model';

import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/userModels/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  userType = new BehaviorSubject<"doctor" | "patient" | null>(null);

  token: string | null | undefined = localStorage.getItem('token');


  isAuthenticated = new BehaviorSubject<boolean>(
    this.token != null &&
    !(new JwtHelperService().isTokenExpired(this.token)));

  constructor(private router: Router,
    private http: HttpClient) {
  }

  /**
   * Create a new patient account and login with the provided credentials.
   * @param user 
   * 
   * @returns 
   */
  createNewPatient(user: Patient) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:9000/patients/auth/signup',
        user)
        .subscribe(
          () => {
            this.login(user.email, user.password, "patient").then(
              () => {
                resolve(true);
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  /**
 * Create a new doctor account and login with the provided credentials.
 * @param user 
 * 
 * @returns 
 */
  createNewDoctor(user: Doctor) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:9000/doctors/auth/signup',
        user)
        .subscribe(
          () => {
            this.login(user.email, user.password, "doctor").then(
              () => {
                resolve(true);
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  /**
 * Login with the provided credentials.
 * @param email 
 * @param password 
 * @returns 
 */
  login(email: string | undefined, password: string | undefined, userType: "doctor" | "patient") {
    return new Promise((resolve, reject) => {
      (this.http.post(
        'http://localhost:9000/' + userType + 's/auth/login',
        { email: email, password: password }) as Observable<{ token: string, doctorId?: string, patientId?: string }>)
        .subscribe({
          next: (authData) => {
            this.token = authData.token;

            localStorage.setItem('token', this.token);

            this.isAuthenticated.next(true);
            this.userType.next(userType);
            resolve(true);
          },
          error: (error) => {
            reject(error);
          }
        }
        );
    });
  }



  getCurrentUser(): Patient | Doctor | null {
    let helper = new JwtHelperService();
    let token = localStorage.getItem('token');


    if (!token) return null;

    let userData: {
      patientId?: string,
      doctorId?: string,
      role: "doctor" | "patient"
    } = helper.decodeToken(token);

    return userData.role == "doctor" ?
      new Doctor({ userId: userData.doctorId })
      :
      new Patient({ userId: userData.patientId });


  }


  sendResetPasswordEmail(email: string, userType: "doctor" | "patient") {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:9000/' + userType + 's/auth/reset-password',
        { email: email })
        .subscribe({
          next: (response) => {
            resolve(true);
          },
          error: (error) => {
            reject(error);
          }
        }
        );
    });


  }

  logout() {
    localStorage.removeItem('token');
    this.token = null;
    this.isAuthenticated.next(false);
  }

}
