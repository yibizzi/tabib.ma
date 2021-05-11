import { ForgotPasswordPageComponent } from './components/authentication/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './components/authentication/loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/authentication/signup-page/signup-page.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { DoctorProfileComponent } from './pages/doctor-pages/doctor-profile/doctor-profile.component';
import { PatientsListComponent } from './pages/doctor-pages/patients-list/patients-list.component';
import { PatientHomepageComponent } from './pages/patient-pages/patient-homepage/patient-homepage.component';
import { HomeBodyComponent } from './pages/home-page/home-body/home-body.component';
import { HomeComponent } from './pages/home-page/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
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
