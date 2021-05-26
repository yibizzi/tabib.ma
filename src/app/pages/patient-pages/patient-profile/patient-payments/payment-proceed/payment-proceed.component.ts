import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-proceed',
  templateUrl: './payment-proceed.component.html',
  styleUrls: ['./payment-proceed.component.css']
})
export class PaymentProceedComponent implements OnInit {

  paid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
