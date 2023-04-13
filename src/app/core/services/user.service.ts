import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  postLogin(loginObj: {username: string, password: string}){
    return this.httpClient.post(`${APIs.User}/authenticate`, loginObj);
  }

  postLogout(){
    return this.httpClient.post(`${APIs.User}/logout`, {});
  }
}
