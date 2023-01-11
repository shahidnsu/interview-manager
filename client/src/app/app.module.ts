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
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { UserTableComponent } from './Dashboard/user-table/user-table.component';
import { SingleUserInfoComponent } from './Dashboard/single-user-info/single-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFromComponent,
    LoginPageComponent,
    SucessPageComponent,
    DashboardComponent,
    NavbarComponent,
    UserTableComponent,
    SingleUserInfoComponent,
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
export class AppModule {}
