import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant, postApplicant } from './ApplicantInterface';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  rootUrl = 'http://localhost:3000/all';
  createUrl = 'http://localhost:3000/all/new';
  value: any;
  constructor(private http: HttpClient) { }
  getAllApplicants(): Observable<Applicant[]> {
    this.value = this.http.get<Applicant[]>(this.rootUrl);
    console.log(this.value);
    return this.value;
  }
  addApplicant(applicant: any): Observable<Applicant> {
    console.log('add applicant', applicant);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post<Applicant>(this.createUrl, applicant, httpOptions);
  }
}
