import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route } from '../../model/route.model';
import { IRouteService } from './iroute.service';

@Injectable({
  providedIn: 'root'
})
export class MockRouteService implements IRouteService {

  routes: Route[] = [
    {
      id: 11,
      component: 'menu-nav',
      order: 1,
      name: 'admin',
      link: '/menu/admin'
    },
    {
      id: 22,
      component: 'menu-nav',
      order: 2,
      name: 'moderator',
      link: '/menu/moderator'
    },
    {
      id: 33,
      component: 'menu-nav',
      order: 3,
      name: 'user',
      link: '/menu/user'
    }
  ]

  constructor() { }
  getRoutesForComponent(component: string): Observable<Route[]> {
    return of(this.routes);
  }
}
