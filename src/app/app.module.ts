import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { BigCardWithImageComponent } from './components/homepage/card_image/big-card-with-image/big-card-with-image.component';
import { ListOfCardsComponent } from './components/homepage/card_image/list-of-cards/list-of-cards.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { TextInputCardComponent } from './components/homepage/text-input-card/text-input-card.component';
import { ContactUsFormComponent } from './components/homepage/contact-us-form/contact-us-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ListOfCardsComponent,
    BigCardWithImageComponent,
    FooterComponent,
    TextInputCardComponent,
    ContactUsFormComponent,
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
