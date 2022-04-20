import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../../model/route.model';
import { IRouteService } from './iroute.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService implements IRouteService {

  constructor() { }
  getRoutesForComponent(component: string): Observable<Route[]> {
    throw new Error('Method not implemented.');
  }

}
