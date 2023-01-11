import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFromComponent } from './application-from/application-from.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SucessPageComponent } from './sucess-page/sucess-page.component';

@NgModule({
  declarations: [AppComponent, ApplicationFromComponent, LoginPageComponent, SucessPageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
