import { Doctor } from './../../models/userModels/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment/appointment.model';
import { Patient } from 'src/app/models/userModels/patient.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface patientServer {
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
export class PatientsService {

  private apiEndpoint: string = "http://localhost:9000/patients/";

  patient$ = new Subject<Patient>();

  constructor(
    private http: HttpClient) { }


  getPatientById(patientId: string) {
    return new Promise((resolve, reject) => {
      this.http.get<patientServer>(this.apiEndpoint + patientId).subscribe(
        (response) => {
          this.patient$.next(new Patient({
            firstName: response.fullName.firstName,
            lastName: response.fullName.lastName,
            email: response.email,
            age: response.age,
            phoneNumber: response.phoneNumber,
            userId: patientId
          }));
        },
        
        (error) => {
          reject(error);
        }
      );
    });
  }


  getPatientsList(offset: number, limit: number) {
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


  updatePatient(patient: Patient) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiEndpoint + patient.userId, patient).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  rateDoctor(patient: Patient, doctor: Doctor, rating: number) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiEndpoint + `${patient.userId}/rate-doctor`, {
        doctorId: doctor.userId,
        rating: rating
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

  updateDoctorRating(patient: Patient, doctor: Doctor, rating: number) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiEndpoint + `${patient.userId}/rate-doctor`, {
        doctorId: doctor.userId,
        rating: rating
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

  cancelAppointment(patient: Patient, appointmentId: string) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiEndpoint + `${patient.userId}/cancel-appointment`, {
        appointmentId: appointmentId
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



  deleteAccount(patient: Patient) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiEndpoint + patient.userId).subscribe(
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
