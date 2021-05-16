import { Patient } from './../../models/userModels/patient.model';
import { Injectable } from '@angular/core';
import { Doctor } from './../../models/userModels/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Appointment } from 'src/app/models/Appointment/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {


  private apiEndpoint: string = "http://localhost:9000/appiontments/";

  constructor(private http: HttpClient){

  }


  getAppointmentById(appointmentId: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiEndpoint + appointmentId).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  getAppointmentsList(offset: number, limit: number, user) {
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

  askForAppointment(patient: Patient, doctor: Doctor, date: Date) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiEndpoint, {
        patientId: patient.userId,
        doctorId: doctor.userId,
        date: date
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

  
}
