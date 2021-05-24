import { Patient } from './../../models/userModels/patient.model';
import { Injectable } from '@angular/core';
import { Doctor } from './../../models/userModels/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Appointment } from 'src/app/models/Appointment/appointment.model';


interface appointment {
  "_id": string,
  "patientId": string,
  "doctorId": string,
  "perception": string,
  "price": number,
  "date": Date,
  "__v": number
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {


  private apiEndpoint: string = "/appointments/";

  constructor(private http: HttpClient){

  }


  getAppointmentById(appointmentId: string) : Promise<Appointment>{
    return new Promise((resolve, reject) => {
      this.http.get<appointment>(this.apiEndpoint + appointmentId).subscribe(
        (response: appointment) => {
          resolve(new Appointment({
            appointmentId: appointmentId,
            doctorId: response.doctorId,
            patientId: response.patientId,
            prescription: response.perception,
            price: response.price,
            date: response.date,
            // length

          }));
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  // getAppointmentsList(offset: number, limit: number) {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(this.apiEndpoint, {
  //       params: {
  //         'offset': `${offset}`,
  //         'limit': `${limit}`,
  //       }
  //     }).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

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
