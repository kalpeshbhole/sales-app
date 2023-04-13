import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent {

  constructor(private router: Router, public authService: AuthService) {}

  logIn(){
    this.router.navigate(['auth/login']);
  }

  logOut(){
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['atm']);
    });
  }
}
