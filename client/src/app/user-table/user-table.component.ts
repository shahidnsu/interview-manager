import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Applicant } from '../ApplicantInterface';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  applicants: Applicant[] = [];
  constructor(private Api: ApiCallService) { }
  getAll(): void {
    this.Api.getAllApplicants().subscribe(
      (applicants) => (this.applicants = applicants)
    );
  }
  ngOnInit(): void {
    this.getAll();
  }
}
