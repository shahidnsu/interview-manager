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

  constructor(private http: HttpClient) { }
  getAllApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.rootUrl);
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
