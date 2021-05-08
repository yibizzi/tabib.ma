import { LoginPageComponent } from './components/authentication/loginpage/loginpage.component';
import { HomeBodyComponent } from './components/homepage/home-body/home-body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeBodyComponent
  },
  {
    path: "login", component: LoginPageComponent
  },
  // {
  //   path: "**", component: RouteNoteFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
