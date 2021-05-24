import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appointments-confirmed',
  templateUrl: './doctor-appointments-confirmed.component.html',
  styleUrls: ['./doctor-appointments-confirmed.component.css']
})
export class DoctorAppointmentsConfirmedComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  deleteAppointment(appointmentId: string) {
    alert("Are you sure? ");
  }

  editAppointment(appointmentId: string){
    this.router.navigate([`../${appointmentId}`, 'edit'], {
      relativeTo: this.route
    });

  }
  goToAppointmentDetails(appointmentId: string){

    this.router.navigate([`../${appointmentId}`], {
      relativeTo: this.route
    });
  }

}
