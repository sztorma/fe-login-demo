import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
