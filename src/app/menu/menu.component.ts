import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../shared/model/route.model';
import { User } from '../shared/model/user.model';
import { StorageService } from '../shared/service/auth/storage.service';
import { IRouteService } from '../shared/service/route/iroute.service';
import { IUserService } from './service/user/iuser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User = new User;
  routes: Route[] = [];

  constructor(private router: Router,
    private storageService: StorageService,
    @Inject('IUserService') private userService: IUserService,
    @Inject('IRouteService') private routeService: IRouteService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getMenuNavRoutes();
  }

  private getUser(): void {
    this.userService.getUserFromJwt().subscribe(user => {
      this.storageService.storeUser(user);
      this.user = this.storageService.getCurrentUser();
    });
  }

  private getMenuNavRoutes(): void {
    this.routeService.getRoutesForComponent('menu-nav').subscribe(routes => {
      this.routes = routes;
    });
  }

  logoutRedirect() {
    this.router.navigate(['/logout']);
  }
}
