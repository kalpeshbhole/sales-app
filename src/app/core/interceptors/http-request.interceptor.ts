import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '@shared/services';
import { AuthService } from '@auth/services';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private authService: AuthService, private router : Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    if(this.authService.isUserLoggedIn()){
      request = request.clone({
        headers: request.headers.set(
          "Authorization", `Bearer ${this.authService.getToken()}`
        ),
      });
    } else {
      this.router.navigate(['auth/login']);
    }

    return next.handle(request).pipe(
      finalize(() => this.loaderService.hide()),
    );
  }
}
