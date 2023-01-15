import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFromComponent } from './Apply/application-from/application-from.component';
import { DashboardComponent } from './Dashborad/dashboard/dashboard.component';
import { LoginPageComponent } from './Admin/login-page/login-page.component';
import { SingleUserComponent } from './Dashborad/dashboard/single-user/single-user.component';
import { UserTableComponent } from './Dashborad/dashboard/user-table/user-table.component';
import {AuthGuardService} from './ApiCall/auth-guard.service';
import {ErrorComponent} from './error/error.component';
const routes: Routes = [
  { path: 'hello/apply', component: ApplicationFromComponent },
  { path: 'loginpage', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: UserTableComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'dashboard/singleuser/:id',
    component: SingleUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'**',
    component:ErrorComponent,

  }
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
