import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  Toast = Swal.mixin({
    timer: 5000
  });

  constructor() { }

  async success(title: string, text: string) {
    await this.Toast.fire({
      icon: 'success',
      title: title,
      text: text
    });
  }

  async error(title: string, text: string) {
    await this.Toast.fire({
      icon: 'error',
      title: title,
      text: text
    });
  }
}
