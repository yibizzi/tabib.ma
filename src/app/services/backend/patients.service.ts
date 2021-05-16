import { Doctor } from './../../models/userModels/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment/appointment.model';
import { Patient } from 'src/app/models/userModels/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiEndpoint: string = "http://localhost:9000/patients/";

  constructor(
    private http: HttpClient) { }


  getPatientById(patientId: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiEndpoint + patientId).subscribe(
        (response) => {
          resolve(response);
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
