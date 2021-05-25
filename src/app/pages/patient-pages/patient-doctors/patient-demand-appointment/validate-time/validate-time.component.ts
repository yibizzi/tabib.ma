import { Creaneau } from './../../../../../models/Appointment/appointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-time',
  templateUrl: './validate-time.component.html',
  styleUrls: ['./validate-time.component.css']
})
export class ValidateTimeComponent implements OnInit {

  isLoading: boolean = false;
  isAccepted: boolean;


  isValidated: boolean = false;

  secondsToRedirect: number = 10;

  creaneu: Creaneau;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {


  }

  ngOnInit(): void {

    this.creaneu = {
      date: new Date(this.route.snapshot.paramMap.get('date') || ""),
      length: Number.parseInt(this.route.snapshot.paramMap.get('length') || "0"),
      type: this.route.snapshot.paramMap.get('type') as "presentiel" | "domicile" | "enligne",

    };
  }


  demandAppointment() {

    this.isValidated = true;
    this.isLoading = true;

    setTimeout(() => {
      this.isAccepted = true;
      this.isLoading = false;
    }, 5000);

    setTimeout(() => {
      this.router.navigate([""]);
    }, 10000);
    setInterval( () => { this.secondsToRedirect -= 1; }, 1000);


  }

}
