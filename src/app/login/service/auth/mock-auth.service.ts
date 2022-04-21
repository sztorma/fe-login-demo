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
    let auth: Authentication = new Authentication;
    auth.jwt = 'mock-token';
    if (username === 'captcha') {
      auth.captchaRequired = true;
    }
    return of(auth);
  }
}
