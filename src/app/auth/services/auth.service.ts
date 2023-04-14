import { Injectable } from '@angular/core';
import { UserService } from '@core/services';
import { StorageService } from '@shared/services';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService, private userService: UserService) { }


  isUserLoggedIn() {
    return this.storageService.get("token") ? true : false;
  }

  getToken() {
    return this.storageService.get("token") || '';
  }

  login(loginObj: { username: string, password: string }) {
    return this.userService.postLogin(loginObj).pipe(
      map((res: any) => {
        this.storageService.set("token", res['token']);
        return res;
      })
    );

  }

  logOut() {
    return this.userService.postLogout().pipe(
      map((res: any) => {
        this.storageService.remove("token");
        return res;
      })
    );

  }
}
