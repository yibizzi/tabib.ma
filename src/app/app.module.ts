import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ForgotPasswordPageComponent } from './components/authentication/forgot-password-page/forgot-password-page.component';
import { PatientHomepageComponent } from './components/patient-homepage/patient-homepage.component';
import { DoctorProfileCardComponent } from './components/doctor-pages/doctor-profile-card/doctor-profile-card.component';
import { DoctorProfilePageComponent } from './components/doctor-pages/doctor-profile-page/doctor-profile-page.component';
import { DoctorProfileComponent } from './components/doctor-pages/doctor-profile/doctor-profile.component';
import { EditDoctorProfileComponent } from './components/doctor-pages/edit-doctor-profile/edit-doctor-profile.component';
import { PatientsListComponent } from './components/doctor-pages/patients-list/patients-list.component';
import { PatientHeaderComponent } from './components/headers/patient-header/patient-header.component';
import { DoctorHeaderComponent } from './components/headers/doctor-header/doctor-header.component';
import { BaseHeaderComponent } from './components/headers/base-header/base-header.component';
import { HomeHeaderComponent } from './components/headers/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorProfileCardComponent,
    DoctorProfileComponent,
    EditDoctorProfileComponent,
    PaymentsListComponent,
    ChosedPaymentsListComponent,
    PaymentMethodComponent,
    PaymentFormComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent,
    PaymentCodeGenerationComponent,
    HeroComponent,
    ListOfCardsComponent,
    BigCardWithImageComponent,
    FooterComponent,
    ContactUsFormComponent,
    HomeBodyComponent,
    NewsLetterSubscriberComponent,
    LoginPageComponent,
    DoctorProfilePageComponent,
    PatientsListComponent,
    SignupPageComponent,
    ForgotPasswordPageComponent,
    PatientHomepageComponent,
    PatientHeaderComponent,
    DoctorHeaderComponent,
    BaseHeaderComponent,
    HomeHeaderComponent
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
