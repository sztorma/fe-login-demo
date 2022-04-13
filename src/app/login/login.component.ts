import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitLoginForm() {
    let user: User = new User;
    user.id = 3;
    user.name = 'Firpo';
    user.roles = ['MODERATOR', 'USER'];
    user.lastLogin = '2022.04.21';
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/menu']);
  }
}
