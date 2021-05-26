import { AuthService } from 'src/app/services/auth.service';
import { DoctorsService } from 'src/app/services/backend/doctors.service';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/models/userModels/doctor.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements AfterViewInit, OnInit, OnDestroy {

  loadingDoctor = true;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  currentDoctor: Doctor;

  private docSubscription: Subscription;



  constructor(private observer: BreakpointObserver,
    private doctorsService: DoctorsService,
    private authService: AuthService) { }


  ngOnInit() {
    this.docSubscription = this.doctorsService
      .currentDoctor$.subscribe((doctor) => {
        this.currentDoctor = doctor;
        this.loadingDoctor = false;
      });

    setTimeout(() => {
      if (!this.currentDoctor) this.doctorsService.getCurrentDoctorById(this.authService.getCurrentUser()?.userId as string);
    }, 3000)
  }

  ngOnDestroy() {
    this.docSubscription.unsubscribe();
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
