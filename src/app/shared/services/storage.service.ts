import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any) {
    if (key && value) {
      localStorage.setItem(key, value);
    }
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    if (key) {
      localStorage.removeItem(key);
    }
  }
}
