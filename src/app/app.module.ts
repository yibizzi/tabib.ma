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
import { LoginpageComponent } from './components/authentication/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ListOfCardsComponent,
    BigCardWithImageComponent,
    FooterComponent,
    ContactUsFormComponent,
    HomeBodyComponent,
    NewsLetterSubscriberComponent,
    LoginpageComponent,
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
