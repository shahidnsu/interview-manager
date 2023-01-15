import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private Builder: FormBuilder, private auth:AuthService, private router:Router) { }
  LogIn = this.Builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get LogInFormControl() {
    return this.LogIn.controls;
  }
  errorMsg : string =''

  login() {
    
    
    if(this.LogInFormControl.email.value && this.LogInFormControl.password.value){
      if(this.LogInFormControl.password.value.length < 2){
        this.errorMsg ='Your password did not match'
      }
      else {
        this.auth.login(this.LogInFormControl.email.value, this.LogInFormControl.password.value).subscribe({
          next :(res:any) => {
            localStorage.setItem('accessToken',res.headers.get('authorization'));
            localStorage.setItem('user',JSON.stringify(res.body.user))
            if(res.body.user){
              this.router.navigate(['dashboard'])
            }
            else {
              this.router.navigate(['loginpage'])
            }
          }
        })
      } 

      
    }else {
      this.errorMsg ='Please enter email and password'
    }
  }





}
