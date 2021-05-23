import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-appointment-demands',
  templateUrl: './doctor-appointment-demands.component.html',
  styleUrls: ['./doctor-appointment-demands.component.css']
})
export class DoctorAppointmentDemandsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  refuseAppointment(appointmentId: string) {
    alert("Are you sure to refuse the demand? ");
  }

  acceptAppointment(appointmentId: string){
    alert("Are you sure you accept the appointment? ");
  }


  goToAppointmentDetails(appointmentId: string){
    console.log("clicked")
    this.router.navigate([`../${appointmentId}`], {
      relativeTo: this.route
    });
  }
}
