import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-application-from',
  templateUrl: './application-from.component.html',
  styleUrls: ['./application-from.component.css'],
})
export class ApplicationFromComponent {
  constructor(private Builder: FormBuilder) { }

  ApplicantForm = this.Builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    Email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    githubUserName: ['', Validators.required],
  });

  onSubmit() { }

  get ApplicantFormControl() {
    return this.ApplicantForm.controls;
  }
}
