import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
 constructor(private route:Router, public titleService:Title){
  this.titleService.setTitle('Error page')
 }
  goHome() {
    this.route.navigate(['loginpage'])

  }

}
