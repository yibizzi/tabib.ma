import { Subject } from 'rxjs';
import { Appointment } from './../../models/Appointment/appointment.model';
import { Doctor, Rating, Addresse } from './../../models/userModels/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Temporary
interface doctorServer {
  "fullName": {
    "firstName": string,
    "lastName": string
  },
  "address"?: Addresse,
  "sendRequest": [],
  "appointments": [],
  "description": string,
  "profileImg"?: string,
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

  currentDoctor$ = new Subject<Doctor>();

  constructor(
    private http: HttpClient) { }


  getCurrentDoctorById(doctorId: string) {
    return new Promise((resolve, reject) => {
      this.http.get<doctorServer>(this.apiEndpoint + doctorId).subscribe(
        (response) => {
          this.currentDoctor$.next(new Doctor({
            firstName: response.fullName.firstName,
            lastName: response.fullName.lastName,
            email: response.email,
            age: response.age,
            phoneNumber: response.phoneNumber,
            addresse: response.address,
            description: response.description,
            profileImg: response.profileImg,
            userId: doctorId
          }));
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getDoctorById(doctorId: string): Promise<Doctor> {
    return new Promise((resolve, reject) => {
      this.http.get<doctorServer>(this.apiEndpoint + doctorId).subscribe(
        (response) => {
          resolve(new Doctor({
            firstName: response.fullName.firstName,
            lastName: response.fullName.lastName,
            email: response.email,
            age: response.age,
            phoneNumber: response.phoneNumber,
            userId: doctorId,
            description: response.description,
            profileImg: response.profileImg,
            addresse: response.address
          }));
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getDoctorAppointments(doctorId: string, offset: number, limit: number): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.http.get<string[]>(this.apiEndpoint + `${doctorId}/appointments`, {
        params: {
          'offset': `${offset}`,
          'limit': `${limit}`,
        }
      }).subscribe(
        (response: string[]) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getDoctorRatings(doctorId: string): Promise<Rating> {

    interface receivedRating {
      "_id"?: string,
      "patientId"?: string,
      "rating": number
    };
    return new Promise((resolve, reject) => {
      this.http.get<receivedRating[]>(this.apiEndpoint + `${doctorId}/ratings`)
        .subscribe(
          (response: receivedRating[]) => {
            resolve(
              response.length > 0 ?
                {
                  averageRating: (response.reduce((accumulator, currentValue) => { return { "rating": accumulator.rating + currentValue.rating } }).rating) / response.length,
                  totalRatings: response?.length
                }
                :
                {
                  averageRating: 5,
                  totalRatings: 0
                });
          },
          (error) => {
            reject(error);
          }
        );
    });
  }


  getDoctorsList(params: { [key: string]: any }, offset: number, limit: number): Promise<Doctor[]> {
    return new Promise((resolve, reject) => {
      this.http.get<doctorServer[]>(this.apiEndpoint, {
        params: {
          'offset': `${offset}`,
          'limit': `${limit}`,
        } && params
      }).subscribe(
        (response) => {
          resolve(response.map((patServer) => new Doctor({

            firstName: patServer.fullName.firstName,
            lastName: patServer.fullName.lastName,
            email: patServer.email,
            age: patServer.age,
            phoneNumber: patServer.phoneNumber,
            userId: patServer._id

          })));
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
