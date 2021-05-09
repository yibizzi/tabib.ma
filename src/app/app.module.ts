import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { BigCardWithImageComponent } from './components/common/card_image/big-card-with-image/big-card-with-image.component';
import { ListOfCardsComponent } from './components/common/card_image/list-of-cards/list-of-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsFormComponent } from './components/homepage/contact-us-form/contact-us-form.component';
import { FormsModule } from '@angular/forms';
import { HomeBodyComponent } from './components/homepage/home-body/home-body.component';
import { NewsLetterSubscriberComponent } from './components/common/news-letter-subscriber/news-letter-subscriber.component';
import { LoginPageComponent } from './components/authentication/loginpage/loginpage.component';
import {RouterModule } from '@angular/router';
import { ChosedPaymentsListComponent } from './components/payment/chosed-payments-list/chosed-payments-list.component';
import { PaymentCodeGenerationComponent } from './components/payment/payment-code-generation/payment-code-generation.component';
import { PaymentFailedComponent } from './components/payment/payment-failed/payment-failed.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { PaymentMethodComponent } from './components/payment/payment-method/payment-method.component';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';
import { PaymentsListComponent } from './components/payment/payments-list/payments-list.component';
import { SignupPageComponent } from './components/authentication/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent,
    ChosedPaymentsListComponent,
    PaymentMethodComponent,
    PaymentFormComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent,
    PaymentCodeGenerationComponent,
    HeaderComponent,
    HeroComponent,
    ListOfCardsComponent,
    BigCardWithImageComponent,
    FooterComponent,
    ContactUsFormComponent,
    HomeBodyComponent,
    NewsLetterSubscriberComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
