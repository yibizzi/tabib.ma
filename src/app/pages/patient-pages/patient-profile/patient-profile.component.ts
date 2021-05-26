import { ImagesServiceService } from './../../../services/images-service.service';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/models/userModels/patient.model';
import { PatientsService } from 'src/app/services/backend/patients.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements AfterViewInit {

  loadingPatient: boolean = true;
  currentPatient: Patient;


  private patientSubscription: Subscription;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private authService: AuthService, private patientsService: PatientsService, private imagesService: ImagesServiceService) { }


  ngOnInit() {
    this.patientSubscription = this.patientsService
      .patient$.subscribe((patient) => {
        this.currentPatient = patient;
        this.loadingPatient = false;
      });

    setTimeout(() => {
      if (!this.currentPatient) this.patientsService.getPatientById(this.authService.getCurrentUser()?.userId as string);
    }, 3000)
  }
  ngOnDestroy() {
    this.patientSubscription.unsubscribe();
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}
