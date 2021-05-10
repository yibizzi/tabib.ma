import { PatientHomepageComponent } from './components/patient-homepage/patient-homepage.component';
import { ForgotPasswordPageComponent } from './components/authentication/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './components/authentication/loginpage/loginpage.component';
import { HomeBodyComponent } from './components/homepage/home-body/home-body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/authentication/signup-page/signup-page.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { DoctorProfileComponent } from './components/doctor-pages/doctor-profile/doctor-profile.component';
import { PatientsListComponent } from './components/doctor-pages/patients-list/patients-list.component';

const routes: Routes = [
  {
    path: '', component: HomeBodyComponent
  },
  {
    path: "signin", component: LoginPageComponent
  },
  {
    path: "signup", component: SignupPageComponent
  },
  {
    path: "forgotPassword", component: ForgotPasswordPageComponent
  },
  {
    path: "payments", component: PaymentFormComponent
  },
  {
    path: "doctor-profile", component: PatientsListComponent
  }, 
  {
    path: "patientHome", component: PatientHomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
