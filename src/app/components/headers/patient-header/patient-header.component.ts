import { Component, OnInit } from '@angular/core';

//temprary interface
interface UserModel{
  id: string,
  fname: string,
  lname: string,
  image: string
}
@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {

  public user: UserModel = {
    id: "Ag2Z5",
    fname: "younes",
    lname: "ibizzi",
    image: "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
