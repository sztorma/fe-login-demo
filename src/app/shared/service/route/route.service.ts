import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Route } from '../../model/route.model';
import { IRouteService } from './iroute.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RouteService implements IRouteService {

  apiUrl = environment.apiUrl;

  constructor(private Http: HttpClient) { }

  getRoutesForComponent(component: string): Observable<Route[]> {
    return this.Http.get<Route[]>(this.apiUrl + '/api/route/get/for-current-roles/for-component/' + component, httpOptions);
  }

}
