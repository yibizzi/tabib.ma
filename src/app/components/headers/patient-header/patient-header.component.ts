import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.auth.logout();
  }

}
