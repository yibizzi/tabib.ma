import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ChosedPaymentsListComponent } from './chosed-payments-list/chosed-payments-list.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent,
    ChosedPaymentsListComponent,
    PaymentMethodComponent,
    PaymentFormComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
