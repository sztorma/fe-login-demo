import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { IUserService } from './iuser.service';

@Injectable({
  providedIn: 'root'
})
export class MockUserService implements IUserService {

  constructor() { }

  getUserFromJwt(): Observable<User> {
    let user: User = new User;
    user.id = 3;
    user.username = 'mock-admin';
    user.roles = ['MODERATOR', 'USER'];
    user.lastLogin = '2022.04.21';
    return of(user);
  }
}
