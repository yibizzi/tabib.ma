import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ChosedPaymentsListComponent } from './chosed-payments-list/chosed-payments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent,
    ChosedPaymentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
