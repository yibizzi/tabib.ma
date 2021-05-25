import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
// import { StateService } from './state.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router) { }

  // canActivate() {
  //   return true;
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable(
      (observer) => {
        this.auth.isAuthenticated.subscribe(
          (auth) => {
            if (!auth) {
              this.router.navigate(['/Signin/ChooseType'], { queryParams: { returnUrl: state.url } });
            }
            observer.next(true);
          }
        );
      }
    );
  }
}

@Injectable()
export class LoggedOutGuard implements CanActivate {


  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return new Observable(
      (observer) => {
        this.auth.isAuthenticated.subscribe(
          (auth) => {
            if (auth) {
              this.router.navigate(['']);
            }
            observer.next(true);
          }
        );
      }
    );


  }
}
