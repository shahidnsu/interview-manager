import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFromComponent } from './application-from/application-from.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserTableComponent } from './user-table/user-table.component';
const routes: Routes = [
  { path: '', component: ApplicationFromComponent },
  { path: 'loginpage', component: LoginPageComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'userTable',
        component: UserTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
