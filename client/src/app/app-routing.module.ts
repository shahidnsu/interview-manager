import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFromComponent } from './application-from/application-from.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserTableComponent } from './user-table/user-table.component';
const routes: Routes = [
  { path: '', component: ApplicationFromComponent },
  { path: 'loginpage', component: LoginPageComponent },

  {
    path: 'dashboard',
    component: UserTableComponent,
  },
  {
    path: 'dashboard/singleuser/:id',
    component: SingleUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
