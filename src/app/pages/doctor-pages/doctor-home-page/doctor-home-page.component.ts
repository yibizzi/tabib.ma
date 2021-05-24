import { Doctor } from 'src/app/models/userModels/doctor.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentsService } from 'src/app/services/backend/appointments.service';
import { DoctorsService } from 'src/app/services/backend/doctors.service';
import { PatientsService } from 'src/app/services/backend/patients.service';
import { Appointment } from 'src/app/models/Appointment/appointment.model';
import { Patient } from 'src/app/models/userModels/patient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor-home-page',
  templateUrl: './doctor-home-page.component.html',
  styleUrls: ['./doctor-home-page.component.css']
})
export class DoctorHomePageComponent implements OnInit, OnDestroy {

  doctor: Doctor;

  loadingAppointments = false;


  private docSubscription: Subscription;

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
    private router: Router) { }

  ngOnInit(): void {
    this.docSubscription = this.doctorsService
      .currentDoctor$.subscribe((doctor) => {
        this.doctor = doctor;
        this.loadAppointments();
      });

    
    this.doctorsService.getCurrentDoctorById(this.authService.getCurrentUser()?.userId as string);
  }

  ngOnDestroy(){
    this.docSubscription.unsubscribe();
  }

  //Load list of user Appointments
  loadAppointments() {
    if (this.doctor.userId) {
      this.loadingAppointments = true;

      //First, get list of appointments ids
      this.doctorsService
        .getDoctorAppointments(this.doctor.userId, 0, 10)
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

                      this.patientsService
                        .getPatientById(appointmentDetails.doctorId)
                        .then((patientInfos: Patient) => {
                          //Add details to Doctor Instance
                          this.doctor.appointments.push(appointmentDetails);
                          this.appointmentsDetails[appointmentDetails.appointmentId] = {
                            stillLoading: false,
                            image: "https://bootstrapmade.com/demo/templates/FlexStart/assets/img/testimonials/testimonials-5.jpg",
                            title: `Mr(s). ${patientInfos.firstName} ${patientInfos.lastName}`,
                            description: `At ${appointmentDetails.date.toUTCString()}`,
                            router_link: `/appointments/${appointmentDetails.appointmentId}`
                          };
                        })
                        .catch((error) => {

                          this.errors.serverError.doctors = true;
                          console.error(error);
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
