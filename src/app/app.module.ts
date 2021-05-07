import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorProfileCardComponent } from './doctor-profile-card/doctor-profile-card.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { EditDoctorProfileComponent } from './edit-doctor-profile/edit-doctor-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorProfileCardComponent,
    DoctorProfileComponent,
    EditDoctorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
