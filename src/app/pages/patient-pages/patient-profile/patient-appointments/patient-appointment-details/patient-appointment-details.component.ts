import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-appointment-details',
  templateUrl: './patient-appointment-details.component.html',
  styleUrls: ['./patient-appointment-details.component.css']
})
export class PatientAppointmentDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  openPaymentConsole() {

    this.router.navigate(["../../", "payments"], {
      relativeTo: this.route
    })

  }

}
