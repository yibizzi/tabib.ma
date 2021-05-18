import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl()
  });

  constructor(private router: Router,
    private route : ActivatedRoute,
    private auth: AuthService) { }

  login() {

    let data: {
      email: string,
      password: string,
      rememberMe: boolean
    } = this.form.value;

    console.log(data);

    //Login as patient for test
    this.auth
      .login(data.email, data.password, "patient")
      .then(value => {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        console.log(returnUrl);
        this.router.navigate([returnUrl || '']);
      })
      .catch((err) => {
        console.error(err);
        if (err instanceof HttpErrorResponse) {
          const errorMessages = new Array<{ propName: string; errors: string }>();
    
          if (err.status === 401) {
            // TODO: extract errors here and match onto the form
              this.form.setErrors({
                serverError: true
              });
            
          }
        }
      });
    // this.router.navigate(["patientHome"]);

  }
}
