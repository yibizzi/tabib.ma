import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardWithImageComponent } from './components/common/card_image/big-card-with-image/big-card-with-image.component';
import { ListOfCardsComponent } from './components/common/card_image/list-of-cards/list-of-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
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
import { DoctorProfileCardComponent } from './pages/doctor-pages/doctor-profile-card/doctor-profile-card.component';
import { DoctorProfilePageComponent } from './pages/doctor-pages/doctor-profile-page/doctor-profile-page.component';
import { DoctorProfileComponent } from './pages/doctor-pages/doctor-profile/doctor-profile.component';
import { EditDoctorProfileComponent } from './pages/doctor-pages/edit-doctor-profile/edit-doctor-profile.component';
import { PatientsListComponent } from './pages/doctor-pages/patients-list/patients-list.component';
import { PatientHeaderComponent } from './components/headers/patient-header/patient-header.component';
import { DoctorHeaderComponent } from './components/headers/doctor-header/doctor-header.component';
import { BaseHeaderComponent } from './components/headers/base-header/base-header.component';
import { HomeHeaderComponent } from './components/headers/home-header/home-header.component';
import { PatientHomepageComponent } from './pages/patient-pages/patient-homepage/patient-homepage.component';
import { ContactUsFormComponent } from './components/common/contact-us-form/contact-us-form.component';
import { HeroComponent } from './components/common/hero/hero.component';
import { HomeBodyComponent } from './pages/home-page/home-body/home-body.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { ListOfSmallCardsWithImagesComponent } from './components/common/card_image/list-of-small-cards-with-images/list-of-small-cards-with-images.component';
import { PatientDoctorsComponent } from './pages/patient-pages/patient-doctors/patient-doctors.component';
import { PatientDoctorProfileComponent } from './pages/patient-pages/patient-doctors/patient-doctor-profile/patient-doctor-profile.component';
import { PatientDoctorsListComponent } from './pages/patient-pages/patient-doctors/patient-doctors-list/patient-doctors-list.component';
import { PatientEditProfileComponent } from './pages/patient-pages/patient-profile/patient-edit-profile/patient-edit-profile.component';
import { PatientAppointmentsComponent } from './pages/patient-pages/patient-profile/patient-appointments/patient-appointments.component';
import { PaymentMethodsComponent } from './pages/patient-pages/patient-profile/patient-payments/payment-methods/payment-methods.component';
import { PaymentProceedComponent } from './pages/patient-pages/patient-profile/patient-payments/payment-proceed/payment-proceed.component';
import { PatientAppointmentDetailsComponent } from './pages/patient-pages/patient-profile/patient-appointments/patient-appointment-details/patient-appointment-details.component';
import { PatientAppointmentsListComponent } from './pages/patient-pages/patient-profile/patient-appointments/patient-appointments-list/patient-appointments-list.component';
import { PatientPaymentsComponent } from './pages/patient-pages/patient-profile/patient-payments/patient-payments.component';
import { PatientProfilePaymentsListComponent } from './pages/patient-pages/patient-profile/patient-payments/patient-profile-payments-list/patient-profile-payments-list.component';
import { PaymentDetailsComponent } from './pages/patient-pages/patient-profile/patient-payments/payment-details/payment-details.component';
import { PatientProfileComponent } from './pages/patient-pages/patient-profile/patient-profile.component';
import { PatientComponent } from './pages/patient-pages/patient.component';
import { AuthGuard } from './services/auth-guard.service';

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
    HomeHeaderComponent,
    HomeComponent,
    HeaderComponent,
    ListOfSmallCardsWithImagesComponent,
    PatientComponent,
    PatientDoctorsComponent,
    PatientDoctorProfileComponent,
    PatientDoctorsListComponent,
    PatientProfileComponent,
    PatientPaymentsComponent,
    PatientEditProfileComponent,
    PatientAppointmentsComponent,
    PatientAppointmentsListComponent,
    PatientAppointmentDetailsComponent,
    PatientProfilePaymentsListComponent,
    PaymentDetailsComponent,
    PaymentMethodsComponent,
    PaymentProceedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
