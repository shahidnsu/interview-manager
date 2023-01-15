import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private Builder: FormBuilder) { }
  LogIn = this.Builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get SignInFormControl() {
    return this.LogIn.controls;
  }
}
