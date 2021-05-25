import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-appointments-list',
  templateUrl: './patient-appointments-list.component.html',
  styleUrls: ['./patient-appointments-list.component.css']
})
export class PatientAppointmentsListComponent implements OnInit {

  appointments = [{
    image: 'https://bootstrapmade.com/demo/templates/FlexStart/assets/img/testimonials/testimonials-5.jpg',
    title: 'Dr. Z7ilika',
    description: '15 Apr. at 14:00 PM',
    router_link: './1'

  },
  {
    image: 'https://bootstrapmade.com/demo/templates/FlexStart/assets/img/testimonials/testimonials-5.jpg',
    title: 'Dr. Z7ilika',
    description: '15 Apr. at 14:00 PM',
    router_link: './2'
  },
  {
    image: 'https://bootstrapmade.com/demo/templates/FlexStart/assets/img/testimonials/testimonials-5.jpg',
    title: 'Dr. Z7ilika',
    description: '15 Apr. at 14:00 PM',
    router_link: './3'
  }]

  doctorsFollowing = [{
    image: 'https://bootstrapmade.com/demo/templates/FlexStart/assets/img/testimonials/testimonials-5.jpg',
    title: 'Dr. Z7ilika',
    router_link: '/doctors/id'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
