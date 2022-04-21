import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Authentication } from 'src/app/shared/model/authentication.model';
import { IAuthService } from './iauth.service';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService implements IAuthService {

  constructor() { }

  authenticate(username: string, password: string): Observable<Authentication> {
    if (username === 'error') {
      return throwError(() => new HttpErrorResponse({ status: 401 }))
    }
    let auth: Authentication = new Authentication;
    auth.jwt = 'mock-token';
    if (username === 'captcha') {
      auth.captchaRequired = true;
    }
    return of(auth);
  }
}
