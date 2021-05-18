import { Doctor } from './../../../models/userModels/doctor.model';
import { Component, OnInit, Input } from '@angular/core';

//temprary interface
interface UserModel{
  id: string,
  fname: string,
  lname: string,
  image: string
}
@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent implements OnInit {
  public user: UserModel = {
    id: "Ag2Z5",
    fname: "younes",
    lname: "ibizzi",
    image: "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
  };

  @Input('currentUser')
  doctor: Doctor | null;

  constructor() { }

  ngOnInit(): void {
  }

}
