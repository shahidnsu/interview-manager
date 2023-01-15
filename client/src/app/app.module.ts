import { NgModule } from '@angular/core';
import { BrowserModule ,Title} from '@angular/platform-browser';
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
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import {AuthService} from './auth.service'
import {AuthGuardService} from './auth-guard.service';
import { ErrorComponent } from './error/error.component'
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
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,AuthGuardService,AuthService,Title],
  bootstrap: [AppComponent],
})
export class AppModule { 

  


}
