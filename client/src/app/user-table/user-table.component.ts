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
  febBatch: Applicant[] = [];
  janBatch: Applicant[] = [];
  marBatch: Applicant[] = [];
  junBatch: Applicant[] = [];

  //for unique months
  //
  uniqueMonths: string[] = [];

  //passing data using props
  //
  //
  febBatchNumbers: number = 0;
  janBatchNumers: number = 0;
  marBatchNumbers: number = 0;
  junBatchNumbers: number = 0;
  constructor(private Api: ApiCallService) { }
  getAll(): void {
    this.Api.getAllApplicants().subscribe((applicants) => {
      this.applicants = applicants;
      this.FebBatchNumbers();
      this.JanBatchNumbers();
      this.MarBatchNumbers();

      this.Months();
      this.febBatchNumbers = this.febBatch.length;
      this.janBatchNumers = this.janBatch.length;
      this.marBatchNumbers = this.marBatch.length;
    });
  }
  ngOnInit(): void {
    this.getAll();
  }

  MarBatchNumbers() {
    const march = this.applicants.filter(
      (applicants) => applicants.batchName === 'Mar'
    );
    this.marBatch = march;
  }
  JanBatchNumbers() {
    const jan = this.applicants.filter(
      (applicants) => applicants.batchName === 'Jan'
    );
    this.janBatch = jan;
  }
  FebBatchNumbers() {
    const feb = this.applicants.filter(
      (applicants) => applicants.batchName === 'Feb'
    );
    this.febBatch = feb;
  }

  Months() {
    this.applicants.map((applicants) => {
      if (!this.uniqueMonths.includes(applicants.batchName)) {
        this.uniqueMonths.push(applicants.batchName);
      }
    });
  }
}
