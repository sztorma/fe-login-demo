import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication } from 'src/app/shared/model/authentication.model';
import { environment } from 'src/environments/environment';
import { IAuthService } from './iauth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<Authentication> {
    return this.http.post<Authentication>(this.apiUrl + '/api/authenticate', { username: username, password: password }, httpOptions);
  }

  captchaAuthenticate(captchaToken: string): Observable<Authentication> {
    return this.http.post<Authentication>(this.apiUrl + '/api/authenticate/captcha', { captchaToken: captchaToken }, httpOptions);
  }

}
