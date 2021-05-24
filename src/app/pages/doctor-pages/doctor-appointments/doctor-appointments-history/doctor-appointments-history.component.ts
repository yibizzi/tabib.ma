import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appointments-history',
  templateUrl: './doctor-appointments-history.component.html',
  styleUrls: ['./doctor-appointments-history.component.css']
})
export class DoctorAppointmentsHistoryComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToAppointmentDetails(appointmentId: string){

    this.router.navigate([`../${appointmentId}`], {
      relativeTo: this.route
    });

  }

}
