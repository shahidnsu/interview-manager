import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from './UserInterface'
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api:string ='http://localhost:3000'

  constructor(private http:HttpClient, public router:Router, public jwtHelper:JwtHelperService) { }
  register(email:string, password:string){
    return this.http.post<User>(`${this.api}/login`, {email,password},{observe:'response'})
  }
  login(email:string, password:string) {
    return this.http.post<User>(`${this.api}/login`, {email,password},{observe:'response'})
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return authToken !== null ?  true :false

  }
  handleError(error: HttpErrorResponse){
    let msg =''
    if(error.error instanceof ErrorEvent){
      msg = error.error.message
    }
    else {
      msg=`Error Code :{error.status}\nMessage : ${error.message}`
    }
    return msg
  }
  public isAuthenticated(): boolean{
    const token = localStorage.getItem('token')
    return !this.jwtHelper.isTokenExpired(token)

  }
}
