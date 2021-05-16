import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment/appointment.model';
import { Doctor } from 'src/app/models/userModels/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiEndpoint: string = "http://localhost:9000/doctors/";

  constructor(
    private http: HttpClient) { }


  getDoctorById(doctorId: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiEndpoint + doctorId).subscribe(
        (response) => {
          resolve(response);
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
