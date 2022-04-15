import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  storeToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  getCurrentUser(): User {
    var jsonUser: any = localStorage.getItem('currentUser');
    return JSON.parse(jsonUser);
  }

  getToken(): string {
    let token: any = localStorage.getItem('token');
    return JSON.parse(token);
  }
}
