import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { ForgotPasswordPageComponent } from './pages/authentication/forgot-password-page/forgot-password-page.component';
import { LoginPageFormComponent } from './pages/authentication/loginpage/form/login-page-form/login-page-form.component';
import { LoginPageComponent } from './pages/authentication/loginpage/loginpage.component';
import { SignupPageComponent } from './pages/authentication/signup-page/signup-page.component';
import { SingupPageFormComponent } from './pages/authentication/signup-page/singup-page-form/singup-page-form.component';
import { UserTypeComponent } from './pages/authentication/user-type/user-type.component';
import { DoctorAppointmentDemandsComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointment-demands/doctor-appointment-demands.component';
import { DoctorAppointmentDetailsComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointment-details/doctor-appointment-details.component';
import { DoctorAppointmentEditComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointment-edit/doctor-appointment-edit.component';
import { DoctorAppointmentsConfirmedComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointments-confirmed/doctor-appointments-confirmed.component';
import { DoctorAppointmentsHistoryComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointments-history/doctor-appointments-history.component';
import { DoctorAppointmentsComponent } from './pages/doctor-pages/doctor-appointments/doctor-appointments.component';
import { DoctorHomePageComponent } from './pages/doctor-pages/doctor-home-page/doctor-home-page.component';
import { DoctorPatientProfileComponent } from './pages/doctor-pages/doctor-patients/doctor-patient-profile/doctor-patient-profile.component';
import { DoctorPatientsComponent } from './pages/doctor-pages/doctor-patients/doctor-patients.component';
import { PatientsListComponent } from './pages/doctor-pages/doctor-patients/patients-list/patients-list.component';
import { DoctorEditProfileComponent } from './pages/doctor-pages/doctor-profile/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorHistoryComponent } from './pages/doctor-pages/doctor-profile/doctor-history/doctor-history.component';
import { DoctorProfileDetailsComponent } from './pages/doctor-pages/doctor-profile/doctor-profile-details/doctor-profile-details.component';
import { DoctorProfileComponent } from './pages/doctor-pages/doctor-profile/doctor-profile.component';
import { DoctorComponent } from './pages/doctor-pages/doctor.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { PatientDoctorProfileComponent } from './pages/patient-pages/patient-doctors/patient-doctor-profile/patient-doctor-profile.component';
import { PatientDoctorsListComponent } from './pages/patient-pages/patient-doctors/patient-doctors-list/patient-doctors-list.component';
import { PatientDoctorsComponent } from './pages/patient-pages/patient-doctors/patient-doctors.component';
import { PatientHomepageComponent } from './pages/patient-pages/patient-homepage/patient-homepage.component';
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
import { AuthGuard, LoggedOutGuard } from './services/Guards/auth-guard.service';
const routes: Routes = [
  {
    path: 'Patient', component: PatientComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'Home', component: PatientHomepageComponent },
      {
        path: 'doctors', component: PatientDoctorsComponent, children: [
          { path: '', component: PatientDoctorsListComponent },
          { path: ':id', component: PatientDoctorProfileComponent }
        ]
      },
      {
        path: 'profile/:id', component: PatientProfileComponent, children: [
          { path: 'edit', component: PatientEditProfileComponent },
          {
            path: 'Appointments', component: PatientAppointmentsComponent, children: [
              { path: '', component: PatientAppointmentsListComponent },
              { path: ':id', component: PatientAppointmentDetailsComponent }
            ]
          },
          {
            path: 'payments', component: PatientPaymentsComponent, children: [
              { path: '', component: PatientProfilePaymentsListComponent },
              { path: ':id', component: PaymentDetailsComponent },
              { path: ':id/payment-method', component: PaymentMethodsComponent },
              { path: ':id/proceed', component: PaymentProceedComponent },
            ]
          },

          { path: '', pathMatch: 'full', redirectTo: 'edit' },

        ]
      },
      { path: 'payments/:id', redirectTo: 'profile/:id/payments' },
      { path: '', pathMatch: 'full', redirectTo: 'Home' },
      { path: '**', redirectTo: 'Home' }
    ]
  },
  {
    path: 'Doctor', component: DoctorComponent,
    canActivate: [],
    children: [
      { path: 'Home', component: DoctorHomePageComponent },
      {
        path: 'Patients', component: DoctorPatientsComponent, children: [
          { path: '', component: PatientsListComponent },
          { path: ':id', component: DoctorPatientProfileComponent }
        ]
      },
      {
        path: 'Appointments', component: DoctorAppointmentsComponent, children: [
          { path: 'History', component: DoctorAppointmentsHistoryComponent },
          { path: 'Confirmed', component: DoctorAppointmentsConfirmedComponent },
          { path: 'Demands', component: DoctorAppointmentDemandsComponent },
          { path: ':id/edit', component: DoctorAppointmentEditComponent },
          { path: ':id', component: DoctorAppointmentDetailsComponent },
          { path: '', redirectTo: "Confirmed", pathMatch: "full" },
        ]
      },
      {
        path: 'profile/:id', component: DoctorProfileComponent, children: [
          { path: '', component: DoctorProfileDetailsComponent },
          { path: 'edit', component: DoctorEditProfileComponent },
          { path: 'History', component: DoctorHistoryComponent }
        ]
      },
      // { path: 'payments',  redirectTo: 'all-stuff'},
      { path: '', pathMatch: 'full', redirectTo: 'Home' },
      { path: '**', redirectTo: 'Home' }
    ]
  },
  // {
  //   path: "ChooseType", component: UserTypeComponent, canActivate:[LoggedOutGuard]
  // },

  {
    path: 'Signin', component: LoginPageComponent,
    canActivate: [LoggedOutGuard],
    children: [
      {path: "ChooseType", component: UserTypeComponent, canActivate:[LoggedOutGuard]},
      {path: ":userType", component: LoginPageFormComponent, canActivate:[LoggedOutGuard]},
      {path: '', pathMatch: 'full', redirectTo: 'ChooseType'},
    ]
  },
  {
    path: 'Signup', component: SignupPageComponent,
    canActivate: [LoggedOutGuard],
    children: [
      {path: "ChooseType", component: UserTypeComponent, canActivate:[LoggedOutGuard]},
      {path: ":userType", component: SingupPageFormComponent, canActivate:[LoggedOutGuard]},
      {path: '', pathMatch: 'full', redirectTo: 'ChooseType'},
    ]
  },
  // {
  //   path: "Signin/:userType", component: LoginPageComponent, canActivate: [LoggedOutGuard]
  // },
  // {
  //   path: "Signup/:userType", component: SignupPageComponent, canActivate: [LoggedOutGuard]
  // },
  {
    path: "forgotPassword", component: ForgotPasswordPageComponent, canActivate: [LoggedOutGuard]
  },
  {
    path: "payments", component: PaymentFormComponent
  },
  {
    path: "doctor-profile", component: PatientsListComponent
  },
  {
    path: "patientHome", component: PatientHomepageComponent
  },
  {
    path: '', component: HomeComponent
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
