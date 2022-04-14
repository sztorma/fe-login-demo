import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/model/user.model';
import { IAuthService } from './service/auth/iauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router, @Inject('IAuthService') private authService: IAuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitLoginForm() {
    this.authService.authenticate(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe(authentication => {
      let user: User = authentication.authenticatedUser;
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(authentication.token));
      this.router.navigate(['/menu']);
    });
  }

  get getUsername() {
    return this.loginForm.get('username');
  }

  get getPassword() {
    return this.loginForm.get('password');
  }
}
