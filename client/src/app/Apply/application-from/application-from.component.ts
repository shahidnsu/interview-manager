import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiCallService } from '../../ApiCall/api-call.service';
import { Applicant } from '../../Interfaces/ApplicantInterface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-application-from',
  templateUrl: './application-from.component.html',
  styleUrls: ['./application-from.component.css'],
})
export class ApplicationFromComponent {
  
  constructor(private Builder: FormBuilder, private Api: ApiCallService,public titleService :Title) { 
    this.titleService.setTitle("Apply- Hello HR")
  }

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
  ngOnInit(): void { }

  Addone(): void {
    this.Api.addApplicant(this.ApplicantForm.value).subscribe((applicant) =>
      this.applicants.push(applicant)
    );
  }
  onSubmit() {
    this.isRedirect = 1;
    this.Addone();
  }

  get ApplicantFormControl() {
    return this.ApplicantForm.controls;
  }
}
