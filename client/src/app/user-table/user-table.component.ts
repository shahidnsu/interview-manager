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
  serachApplicants: Applicant[] = [];
  febBatch: Applicant[] = [];
  janBatch: Applicant[] = [];
  marBatch: Applicant[] = [];
  junBatch: Applicant[] = [];
  roundOne: Applicant[] = [];
  roundTwo: Applicant[] = [];
  finalRound: Applicant[] = [];
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
  totalNumbers: number = 0;
  roundOneNumbers: number = 0;
  roundTwoNumbers: number = 0;
  finalRoundNumbers: number = 0;
  //hold the input value
  //
  inputValue: string = '';
  constructor(private Api: ApiCallService) { }

  getAll(): void {
    this.Api.getAllApplicants().subscribe((applicants) => {
      this.applicants = applicants;
      this.FebBatchNumbers();
      this.JanBatchNumbers();
      this.MarBatchNumbers();
      this.RoundOne();
      this.RoundTwo();
      this.FinalRound();
      this.Months();
      this.febBatchNumbers = this.febBatch.length;
      this.janBatchNumers = this.janBatch.length;
      this.marBatchNumbers = this.marBatch.length;
      this.totalNumbers = this.applicants.length;
      this.roundOneNumbers = this.roundOne.length;
      this.roundTwoNumbers = this.roundTwo.length;
      this.finalRoundNumbers = this.finalRound.length;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  isRedirect = 0;
  //this function for showing the user to the show single applicant view
  //
  singleApplicantView(index: number) {
    this.isRedirect = index;
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
  RoundOne() {
    const one = this.applicants.filter(
      (applicants) => applicants.status === 'Round 1'
    );

    this.roundOne = one;
  }

  RoundTwo() {
    const one = this.applicants.filter(
      (applicants) => applicants.status === 'Round 2'
    );
    this.roundTwo = one;
  }

  FinalRound() {
    const one = this.applicants.filter(
      (applicants) => applicants.status === 'Final round'
    );
    this.finalRound = one;
  }
  gettingInput(value: string) {
    this.inputValue = value;
    this.serachApplicants = this.applicants.filter((applicants) =>
      applicants.firstName.includes(this.inputValue)
    );

    this.applicants = this.serachApplicants;
  }
}
