import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedInLoginResponseComponent } from './linked-in-login-response/linked-in-login-response.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "linkedInLogin", component: LinkedInLoginResponseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
