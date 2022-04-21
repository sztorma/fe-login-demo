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

  loginForm!: FormGroup;
  siteKey: string;
  captchaRequired: boolean;

  constructor(private router: Router, @Inject('IAuthService') private authService: IAuthService, private storageService: StorageService) {
    this.captchaRequired = false;
    this.siteKey = '6Lf_aIofAAAAABvw-u5SHKGttb7O57PuCdavMpBu';
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  submitLoginForm() {
    this.authService.authenticate(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe(authentication => {
      this.storageService.storeToken(authentication.jwt);
      if (authentication.captchaRequired) {
        this.captchaRequired = true;
      } else {
        this.router.navigate(['/menu']);
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
