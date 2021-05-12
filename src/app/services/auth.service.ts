import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


//temporary interfaces
interface authResponse { token: string, userId: string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = new BehaviorSubject<boolean>(false);
  token: string | null;
  userId: string | null;

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
        'http://localhost:9000/doctors/auth/login',
        { email: email, password: password }) as Observable<authResponse>)
        .subscribe({
          next: (authData) => {
            this.token = authData.token;
            this.userId = authData.userId;
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
