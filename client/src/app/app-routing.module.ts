import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFromComponent } from './application-from/application-from.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  { path: '', component: ApplicationFromComponent },
  { path: 'loginpage', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
