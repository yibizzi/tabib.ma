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

  isAuthenticated = new BehaviorSubject<boolean>(localStorage.getItem('token') != null);
  userType = new BehaviorSubject<"doctor" | "patient" | null>("patient");

  token: string | null | undefined;
  userId: string | null | undefined;

  constructor(private router: Router,
    private http: HttpClient) { }

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
        'http://localhost:9000/' + userType == "doctor" ? "doctors" : "patients" + '/auth/login',
        { email: email, password: password }) as Observable<{ token: string, doctorId?: string, patientId?: string }>)
        .subscribe({
          next: (authData) => {
            this.token = authData.token;
            this.userId = authData.doctorId || authData.patientId;

            localStorage.setItem('token', this.token);
            localStorage.setItem('userId', this.userId || "");

            this.isAuthenticated.next(true);
            resolve(true);
          },
          error: (error) => {
            reject(error);
          }
        }
        );
    });
  }



  getCurrentUser(): User | null {
    let helper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if (!token) return null;

    let userData: {
      userId: string | undefined,
      userEmail: string,
      userType: "doctor" | "patient" | undefined
    } = helper.decodeToken(token);

    return userData.userType == "doctor" ?
      new Doctor({ email: userData.userEmail, userId: userData.userId })
      :
      new Patient({ email: userData.userEmail, userId: userData.userId });

  }

  logout() {
    localStorage.removeItem('token');
    this.userId = null;
    this.token = null;
    this.isAuthenticated.next(false);
  }

}
