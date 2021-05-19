import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';


import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardWithImageComponent } from './components/common/card_image/big-card-with-image/big-card-with-image.component';
import { ListOfCardsComponent } from './components/common/card_image/list-of-cards/list-of-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsLetterSubscriberComponent } from './components/common/news-letter-subscriber/news-letter-subscriber.component';
import { ChosedPaymentsListComponent } from './components/payment/chosed-payments-list/chosed-payments-list.component';
import { DoctorEditProfileComponent } from './pages/doctor-pages/doctor-profile/doctor-edit-profile/doctor-edit-profile.component';
import { ListOfSmallCardsWithImagesComponent } from './components/common/card_image/list-of-small-cards-with-images/list-of-small-cards-with-images.component';
import { ContactUsFormComponent } from './components/common/contact-us-form/contact-us-form.component';
import { HeroComponent } from './components/common/hero/hero.component';
import { BaseHeaderComponent } from './components/headers/base-header/base-header.component';
import { DoctorHeaderComponent } from './components/headers/doctor-header/doctor-header.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { HomeHeaderComponent } from './components/headers/home-header/home-header.component';
import { PatientHeaderComponent } from './components/headers/patient-header/patient-header.component';
import { PaymentCodeGenerationComponent } from './components/payment/payment-code-generation/payment-code-generation.component';
import { PaymentFailedComponent } from './components/payment/payment-failed/payment-failed.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { PaymentMethodComponent } from './components/payment/payment-method/payment-method.component';
import { PaymentSuccessComponent } from './components/payment/payment-success/payment-success.component';
import { PaymentsListComponent } from './components/payment/payments-list/payments-list.component';
import { ForgotPasswordPageComponent } from './pages/authentication/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './pages/authentication/loginpage/loginpage.component';
import { SignupPageComponent } from './pages/authentication/signup-page/signup-page.component';
import { DoctorHomePageComponent } from './pages/doctor-pages/doctor-home-page/doctor-home-page.component';
import { DoctorPatientProfileComponent } from './pages/doctor-pages/doctor-patients/doctor-patient-profile/doctor-patient-profile.component';
import { DoctorPatientsComponent } from './pages/doctor-pages/doctor-patients/doctor-patients.component';
import { DoctorHistoryComponent } from './pages/doctor-pages/doctor-profile/doctor-history/doctor-history.component';
import { DoctorProfileDetailsComponent } from './pages/doctor-pages/doctor-profile/doctor-profile-details/doctor-profile-details.component';
import { DoctorComponent } from './pages/doctor-pages/doctor.component';
import { HomeBodyComponent } from './pages/home-page/home-body/home-body.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { PatientDoctorProfileComponent } from './pages/patient-pages/patient-doctors/patient-doctor-profile/patient-doctor-profile.component';
import { PatientDoctorsListComponent } from './pages/patient-pages/patient-doctors/patient-doctors-list/patient-doctors-list.component';
import { PatientDoctorsComponent } from './pages/patient-pages/patient-doctors/patient-doctors.component';
import { PatientHomepageComponent } from './pages/patient-pages/patient-homepage/patient-homepage.component';
import { NavMenuItemComponent } from './pages/patient-pages/patient-profile/nav-menu-item/nav-menu-item.component';
import { PatientAppointmentDetailsComponent } from './pages/patient-pages/patient-profile/patient-appointments/patient-appointment-details/patient-appointment-details.component';
import { PatientAppointmentsListComponent } from './pages/patient-pages/patient-profile/patient-appointments/patient-appointments-list/patient-appointments-list.component';
import { PatientAppointmentsComponent } from './pages/patient-pages/patient-profile/patient-appointments/patient-appointments.component';
import { PatientEditProfileComponent } from './pages/patient-pages/patient-profile/patient-edit-profile/patient-edit-profile.component';
import { PatientPaymentsComponent } from './pages/patient-pages/patient-profile/patient-payments/patient-payments.component';
import { PatientProfilePaymentsListComponent } from './pages/patient-pages/patient-profile/patient-payments/patient-profile-payments-list/patient-profile-payments-list.component';
import { PaymentDetailsComponent } from './pages/patient-pages/patient-profile/patient-payments/payment-details/payment-details.component';
import { PaymentMethodsComponent } from './pages/patient-pages/patient-profile/patient-payments/payment-methods/payment-methods.component';
import { PaymentProceedComponent } from './pages/patient-pages/patient-profile/patient-payments/payment-proceed/payment-proceed.component';
import { PatientProfileComponent } from './pages/patient-pages/patient-profile/patient-profile.component';
import { PatientComponent } from './pages/patient-pages/patient.component';
import { AuthService } from './services/auth.service';
import { DoctorAppointmentsComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointments.component';
import { DoctorAppointmentDetailsComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointment-details/doctor-appointment-details.component';
import { DoctorAppointmentDemandsComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointment-demands/doctor-appointment-demands.component';
import { DoctorAppointmentsHistoryComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointments-history/doctor-appointments-history.component';
import { DoctorAppointmentsConfirmedComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointments-confirmed/doctor-appointments-confirmed.component';
import { DoctorAppointmentEditComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointment-edit/doctor-appointment-edit.component';
import { PatientsListComponent } from './pages/doctor-pages/doctor-patients/patients-list/patients-list.component';
import { DoctorProfileCardComponent } from './pages/doctor-pages/doctor-profile-card/doctor-profile-card.component';
import { DoctorProfilePageComponent } from './pages/doctor-pages/doctor-profile-page/doctor-profile-page.component';
import { DoctorProfileComponent } from './pages/doctor-pages/doctor-profile/doctor-profile.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthInterceptorService } from './services/backend/auth-interceptor.service';
import { AuthGuard, LoggedOutGuard } from './services/Guards/auth-guard.service';
import { UserTypeComponent } from './pages/authentication/user-type/user-type.component';
import { LoginPageFormComponent } from './pages/authentication/loginpage/form/login-page-form/login-page-form.component';
import { SingupPageFormComponent } from './pages/authentication/signup-page/singup-page-form/singup-page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorProfileCardComponent,
    DoctorProfileComponent,
    DoctorEditProfileComponent,
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
    PaymentProceedComponent,
    DoctorComponent,
    DoctorHomePageComponent,
    DoctorPatientsComponent,
    DoctorPatientProfileComponent,
    DoctorProfileDetailsComponent,
    DoctorHistoryComponent,
    NavMenuItemComponent,
    DoctorEditProfileComponent,
    DoctorAppointmentsComponent,
    DoctorAppointmentDetailsComponent,
    DoctorAppointmentDemandsComponent,
    DoctorAppointmentsHistoryComponent,
    DoctorAppointmentsConfirmedComponent,
    DoctorAppointmentEditComponent,
    UserTypeComponent,
    LoginPageFormComponent,
    SingupPageFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,


    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,

    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    LoggedOutGuard,
    AuthService,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
