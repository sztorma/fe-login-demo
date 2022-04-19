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

  storeToken(jwt: string) {
    localStorage.setItem('jwt', JSON.stringify(jwt));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  getCurrentUser(): User {
    var jsonUser: any = localStorage.getItem('currentUser');
    return JSON.parse(jsonUser);
  }

  getJwt(): string {
    let jwt: any = localStorage.getItem('jwt');
    return JSON.parse(jwt);
  }
}
