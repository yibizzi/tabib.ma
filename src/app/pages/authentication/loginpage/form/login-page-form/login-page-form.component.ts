
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page-form',
  templateUrl: './login-page-form.component.html',
  styleUrls: ['./login-page-form.component.css']
})
export class LoginPageFormComponent  {


  
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

    //Login as patient for test
    this.auth
      .login(data.email, data.password, this.userType)
      .then(value => {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
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

  get userType(): "patient" | "doctor"{

    
    let userTypeFromUrl = this.route.snapshot.paramMap.get('userType');

    let userType: "patient" | "doctor" = (userTypeFromUrl == "doctor" || userTypeFromUrl == "patient") ? userTypeFromUrl : "patient";

    return userType;

  }
}
