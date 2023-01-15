import { NgModule } from '@angular/core';
import { BrowserModule ,Title} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplicationFromComponent } from './Apply/application-from/application-from.component';
import { LoginPageComponent } from './Admin/login-page/login-page.component';
import { SucessPageComponent } from './Apply/application-from/sucess-page/sucess-page.component';
import { DashboardComponent } from './Dashborad/dashboard/dashboard.component';
import { UserTableComponent } from './Dashborad/dashboard/user-table/user-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleUserComponent } from './Dashborad/dashboard/single-user/single-user.component';
import { UserLineChartComponent } from './Dashborad/dashboard/user-line-chart/user-line-chart.component';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import {AuthService} from './ApiCall/auth.service'
import {AuthGuardService} from './ApiCall/auth-guard.service';
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
