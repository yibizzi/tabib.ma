import { Subject } from 'rxjs';
import { Appointment } from './../../models/Appointment/appointment.model';
import { Doctor } from './../../models/userModels/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Temporary
interface doctorServer {
  "fullName": {
    "firstName": string,
    "lastName": string
  },
  "sendRequest": [],
  "appointments": [],
  "history": [],
  "_id": string,
  "email": string,
  "password": string,
  "phoneNumber": string,
  "age": number,
  "__v": number
}


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private apiEndpoint: string = "http://localhost:9000/doctors/";
  
  doctor$ = new Subject<Doctor>();

  constructor(
    private http: HttpClient) { }


  getDoctorById(doctorId: string) {
    return new Promise((resolve, reject) => {
      this.http.get<doctorServer>(this.apiEndpoint + doctorId).subscribe(
        (response) => {
          this.doctor$.next(new Doctor({
            firstName: response.fullName.firstName,
            lastName: response.fullName.lastName,
            email: response.email,
            age: response.age,
            phoneNumber: response.phoneNumber,
            userId: doctorId
          }));
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  getDoctorsList(offset: number, limit: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiEndpoint, {
        params: {
          'offset': `${offset}`,
          'limit': `${limit}`,
        }
      }).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  updateDoctor(doctor: Doctor) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiEndpoint + doctor.userId, doctor).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  confirmAppointment(doctor: Doctor, appointment: Appointment) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiEndpoint + `${doctor.userId}/confirm-appointment`, appointment).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteAccount(doctor: Doctor) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiEndpoint + doctor.userId).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
