import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  path: string = '/api/content/admin';

  constructor() { }

  ngOnInit(): void {
  }

}
