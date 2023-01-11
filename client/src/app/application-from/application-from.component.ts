import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-application-from',
  templateUrl: './application-from.component.html',
  styleUrls: ['./application-from.component.css'],
})
export class ApplicationFromComponent {
  constructor(private Builder: FormBuilder) { }

  //this value just redirect user to the success page
  //
  //
  isRedirect = 0;

  ApplicantForm = this.Builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    Email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    githubUserName: ['', Validators.required],
    BatchName: ['', Validators.required],
  });

  onSubmit() {
    this.isRedirect = 1;
    console.log(this.isRedirect);
  }

  get ApplicantFormControl() {
    return this.ApplicantForm.controls;
  }
}
