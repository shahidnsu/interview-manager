import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplicationFromComponent } from './application-from/application-from.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SucessPageComponent } from './sucess-page/sucess-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserLineChartComponent } from './user-line-chart/user-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFromComponent,
    LoginPageComponent,
    SucessPageComponent,
    DashboardComponent,
    UserTableComponent,
    NavbarComponent,
    SingleUserComponent,
    UserLineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
