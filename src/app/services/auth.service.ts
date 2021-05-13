import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


//temporary interfaces
interface authResponse { token: string, patientId?: string, doctorId?: string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = new BehaviorSubject<boolean>(false);
  userType = new BehaviorSubject<"doctor" | "patient" | null>("patient");

  token: string | null | undefined;
  userId: string | null | undefined;

  constructor(private router: Router,
    private http: HttpClient) { }

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/signup',
        { email: email, password: password })
        .subscribe(
          () => {
            this.login(email, password).then(
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

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      (this.http.post(
        'http://localhost:9000/patients/auth/login',
        { email: email, password: password }) as Observable<authResponse>)
        .subscribe({
          next: (authData) => {
            this.token = authData.token;
            this.userId = authData.patientId || authData.doctorId;
            console.log(this.userId);
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

  logout() {
    this.isAuthenticated.next(false);
    this.userId = null;
    this.token = null;
  }
}
