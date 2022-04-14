import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication } from 'src/app/shared/model/authentication.model';
import { IAuthService } from './iauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  constructor() { }

  authenticate(username: string, password: string): Observable<Authentication> {
    throw new Error('Method not implemented.');
  }
}
