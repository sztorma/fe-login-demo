import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user!: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    var jsonUser: any = localStorage.getItem('currentUser');
    this.user = JSON.parse(jsonUser);
  }

  logoutRedirect() {
    this.router.navigate(['/logout']);
  }
}
