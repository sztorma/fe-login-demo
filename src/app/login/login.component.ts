import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitLoginForm() {
    let user: User = new User;
    user.id = 3;
    user.name = this.loginForm.get('username')?.value;
    user.roles = ['MODERATOR', 'USER'];
    user.lastLogin = '2022.04.21';
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/menu']);
  }

  get getUsername() {
    return this.loginForm.get('username');
  }

  get getPassword() {
    return this.loginForm.get('password');
  }
}
