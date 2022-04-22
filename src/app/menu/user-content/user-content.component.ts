import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {

  path: string = '/api/content/user';

  constructor() { }

  ngOnInit(): void {
  }

}
