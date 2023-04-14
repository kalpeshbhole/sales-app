import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '@auth/services';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].includes(err.status)) {
          this.authService.logOut().subscribe(() => {
            this.router.navigate(['auth/login']);
          });
        }

        const error = err.error?.message || err.statusText;
        console.error(err);
        return throwError(() => error);
      })
    );
  }
}
