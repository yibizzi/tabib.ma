import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.component.html',
  styleUrls: ['./choose-time.component.css']
})
export class ChooseTimeComponent implements OnInit {


  appointmentLength: number = 15;
  appointmentType: string = "presentiel";
  appointmentDateTime: string = "2011-08-19T13:45:00";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  goToValidate() {

    console.log();
    console.log(this.appointmentDateTime);

    this.router.navigate(["..", "ValidateTime"], {
      relativeTo: this.route,
      queryParams: {
        date: this.appointmentDateTime,
        length: this.appointmentLength,
        type: this.appointmentType
      }
    });
  }

}
