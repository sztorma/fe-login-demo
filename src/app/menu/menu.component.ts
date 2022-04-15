import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/model/user.model';
import { StorageService } from '../shared/service/auth/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user!: User;

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.user = this.storageService.getCurrentUser();
  }

  logoutRedirect() {
    this.router.navigate(['/logout']);
  }
}
