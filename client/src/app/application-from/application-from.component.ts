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
  applicants: Applicant[] = [];

  ApplicantForm = this.Builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    githubUserName: ['', Validators.required],
    batchName: ['', Validators.required],
  });
  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.Api.getAllApplicants().subscribe(
      (applicants) => (this.applicants = applicants)
    );
  }

  Addone(): void {
    console.log('before  addone', this.ApplicantForm.value);
    this.Api.addApplicant(this.ApplicantForm.value).subscribe((applicant) =>
      this.applicants.push(applicant)
    );
    console.log('from addone function');
  }
  onSubmit() {
    this.isRedirect = 1;
    this.Addone();
    console.log(this.applicants);
    console.log('from on submit');
  }

  get ApplicantFormControl() {
    return this.ApplicantForm.controls;
  }
}
