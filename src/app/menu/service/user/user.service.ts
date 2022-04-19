import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { environment } from 'src/environments/environment';
import { IUserService } from './iuser.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserFromJwt(): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/api/user/get/jwt', httpOptions);
  }

}
