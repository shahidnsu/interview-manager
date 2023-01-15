import { Injectable } from '@angular/core';

import {AuthService} from './auth.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth:AuthService, public router:Router,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.auth.isAuthenticated()){
      
      return true
    }
    this.route.navigate(['./loginpage']);
    return false;

  }
}
