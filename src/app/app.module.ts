import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorProfileCardComponent } from './doctor-profile-card/doctor-profile-card.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { EditDoctorProfileComponent } from './edit-doctor-profile/edit-doctor-profile.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ChosedPaymentsListComponent } from './chosed-payments-list/chosed-payments-list.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { PaymentCodeGenerationComponent } from './payment-code-generation/payment-code-generation.component';
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
import { DoctorProfilePageComponent } from './doctor-profile-page/doctor-profile-page.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

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
    HeaderComponent,
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
