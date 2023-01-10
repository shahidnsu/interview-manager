import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-application-from',
  templateUrl: './application-from.component.html',
  styleUrls: ['./application-from.component.css'],
})
export class ApplicationFromComponent {
  ApplicantForm = this.Builder.group({
    firstName: [''],
    lastName: [''],
    Email: [''],
    phoneNumber: [''],
    githubUserName: [''],
  });

  constructor(private Builder: FormBuilder) { }
  onSubmit() {
    console.warn(this.ApplicantForm.value);
  }
}
