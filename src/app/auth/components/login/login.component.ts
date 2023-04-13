import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private router: Router, private authService: AuthService){}

  logIn() {
    if (!this.loginForm.valid) {
      return;
    }

    this.authService.login(this.loginForm.value as {username: string, password: string}).subscribe(res => {
      this.router.navigate(['overview/regions']);
    });

  }
}
