import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-letter-subscriber',
  templateUrl: './news-letter-subscriber.component.html',
  styleUrls: ['./news-letter-subscriber.component.css']
})
export class NewsLetterSubscriberComponent  {
  subscribe(email: string){
    console.log(email);
  }
}
