import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Authentication } from 'src/app/shared/model/authentication.model';
import { User } from 'src/app/shared/model/user.model';
import { IAuthService } from './iauth.service';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService implements IAuthService {

  constructor() { }

  authenticate(username: string, password: string): Observable<Authentication> {
    let user: User = new User;
    user.id = 3;
    user.name = username;
    user.roles = ['MODERATOR', 'USER'];
    user.lastLogin = '2022.04.21';
    let auth: Authentication = new Authentication;
    auth.jwt = 'mock-token';
    auth.authenticatedUser = user;
    return of(auth);
  }
}
