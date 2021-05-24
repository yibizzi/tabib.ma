import { DoctorsService } from './../../../services/backend/doctors.service';
import { Appointment } from 'src/app/models/Appointment/appointment.model';
import { AppointmentsService } from './../../../services/backend/appointments.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/backend/patients.service';
import { Patient } from 'src/app/models/userModels/patient.model';
import { Doctor } from 'src/app/models/userModels/doctor.model';

@Component({
  selector: 'app-patient-homepage',
  templateUrl: './patient-homepage.component.html',
  styleUrls: ['./patient-homepage.component.css']
})
export class PatientHomepageComponent implements OnInit {

  patient: Patient;

  loadingAppointments = false;

  appointmentsDetails: {
    [appointmentId: string]: {
      image?: string,
      title?: string,
      description?: string,
      router_link?: string,
      stillLoading?: boolean
    }
  } = {};

  errors: {
    [errorName: string]: {
      [sectionName: string]: boolean
    }
  } = {
    serverError: {
      
    }
  };

  constructor(
    private authService: AuthService,
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
    private appointmentsService: AppointmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.patientsService
      .patient$.subscribe((patient) => {
        this.patient = patient;
        this.loadAppointments();
      });

  }

  //Load list of user Appointments
  loadAppointments() {
    if (this.patient.userId) {
      this.loadingAppointments = true;

      //First, get list of appointments ids
      this.patientsService
        .getPatientAppointments(this.patient.userId, 0, 10)
        .then((listOfAppointmentsIds: string[]) => {

          //Then get details of each appointment
          Promise
            .all(
              listOfAppointmentsIds
                .map((id: string) => {
                  this.appointmentsService
                    .getAppointmentById(id)
                    .then((appointmentDetails: Appointment) => {

                      this.appointmentsDetails[appointmentDetails.appointmentId] = {
                        stillLoading: true,
                      };
                      if (this.loadingAppointments) this.loadingAppointments = false;

                      this.doctorsService
                        .getDoctorById(appointmentDetails.doctorId)
                        .then((doctorInfos: Doctor) => {
                          //Add details to Patient Instance
                          this.patient.appointments.push(appointmentDetails);
                          this.appointmentsDetails[appointmentDetails.appointmentId] = {
                            stillLoading: false,
                            image: "https://bootstrapmade.com/demo/templates/FlexStart/assets/img/testimonials/testimonials-5.jpg",
                            title: `Dr. ${doctorInfos.firstName} ${doctorInfos.lastName}`,
                            description: `At ${appointmentDetails.date.toUTCString()}`,
                            router_link: `/appointments/${appointmentDetails.appointmentId}`
                          };
                        })
                        .catch((error) => {

                          this.errors.serverError.doctors = true;
                        })
                    })
                })).catch((error) => {
                  this.errors.serverError.appointments = true;
                })
        });
    }
  }


  get appointmentsDetailsArray() {

    return Object.keys(this.appointmentsDetails).map(key => this.appointmentsDetails[key]);

  }

}
