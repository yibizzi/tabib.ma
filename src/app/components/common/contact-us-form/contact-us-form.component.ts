import { Component, OnInit, Input } from '@angular/core';


interface contact {
  name?: string,
  email: string,
  subject?: string,
  message: string
}

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent {

  @Input('addresses')
  addresses: string[];

  @Input('phoneNumbers')
  phoneNumbers: string[];

  @Input('emails')
  emails: string[];

  @Input('openHours')
  openHours: string[];


  contactDetails: contact;

  onSubmit(data: contact){
    console.log(data);
  }


}
