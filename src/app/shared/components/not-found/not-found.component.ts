import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router : Router, private authService: AuthService){}

  gotoHome(){
    if(this.authService.isUserLoggedIn()) {
      this.router.navigate(['regions']);
    } else {
      this.router.navigate(['auth/login']);
    }
  }
}
