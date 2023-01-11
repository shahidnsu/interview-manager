import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from './ApplicantInterface';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  rootUrl = 'http://localhost:3000/all';

  constructor(private http: HttpClient) { }
  getAllApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.rootUrl);
  }
}
