import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { Applicant } from '../ApplicantInterface';
@Component({
  selector: 'app-application-from',
  templateUrl: './application-from.component.html',
  styleUrls: ['./application-from.component.css'],
})
export class ApplicationFromComponent {
  constructor(private Builder: FormBuilder, private Api: ApiCallService) { }

  //this value just redirect user to the success page
  //
  //
  isRedirect = 0;
  applicant: Applicant[] = [];
  ApplicantForm = this.Builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    Email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    githubUserName: ['', Validators.required],
    BatchName: ['', Validators.required],
  });
  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.Api.getAllApplicants().subscribe(
      (applicant) => (this.applicant = applicant)
    );
  }
  onSubmit() {
    this.isRedirect = 1;
    console.log(this.isRedirect);
    console.log(this.applicant);
  }

  get ApplicantFormControl() {
    return this.ApplicantForm.controls;
  }
}
