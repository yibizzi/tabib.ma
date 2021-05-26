import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile-payments-list',
  templateUrl: './patient-profile-payments-list.component.html',
  styleUrls: ['./patient-profile-payments-list.component.css']
})
export class PatientProfilePaymentsListComponent implements OnInit {

  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.isLoading = false;
    }, 2000);
  }

  proceedToPayement() {

    this.router.navigate(['./payment-method'], {
      relativeTo: this.route
    });

  }

}
