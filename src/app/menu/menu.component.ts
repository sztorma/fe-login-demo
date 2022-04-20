import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../shared/model/route.model';
import { User } from '../shared/model/user.model';
import { StorageService } from '../shared/service/auth/storage.service';
import { IUserService } from './service/user/iuser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User = new User;
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

  constructor(private router: Router, private storageService: StorageService, @Inject('IUserService') private userService: IUserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.userService.getUserFromJwt().subscribe(user => {
      this.storageService.storeUser(user);
      this.user = this.storageService.getCurrentUser();
    });
  }

  logoutRedirect() {
    this.router.navigate(['/logout']);
  }
}
