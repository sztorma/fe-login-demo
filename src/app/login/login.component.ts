import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/model/user.model';
import { StorageService } from '../shared/service/auth/storage.service';
import { IAuthService } from './service/auth/iauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  siteKey: string;
  captchaRequired: boolean;
  isLoading!: boolean;
  badCredentials!: boolean;


  constructor(private router: Router, @Inject('IAuthService') private authService: IAuthService, private storageService: StorageService) {
    this.captchaRequired = false;
    this.badCredentials = false;
    this.siteKey = '6Lf_aIofAAAAABvw-u5SHKGttb7O57PuCdavMpBu';
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.isLoading = false;
  }

  submitLoginForm() {
    this.isLoading = true;
    this.authService.authenticate(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe({
      next: (authentication) => {
        this.badCredentials = false;
        this.storageService.storeToken(authentication.jwt);
        if (authentication.captchaRequired) {
          this.captchaRequired = true;
        } else {
          this.router.navigate(['/menu']);
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.isLoading = false;
          this.badCredentials = true;
        }
      }
    });
  }

  get getUsername() {
    return this.loginForm.get('username');
  }

  get getPassword() {
    return this.loginForm.get('password');
  }

  resolved(captchaResponse: string) {
    // TODO api call to reset loginAttempt
    this.captchaRequired = false;
    this.router.navigate(['/menu']);
  }

}
