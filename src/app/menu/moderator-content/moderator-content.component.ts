import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-content',
  templateUrl: './moderator-content.component.html',
  styleUrls: ['./moderator-content.component.css']
})
export class ModeratorContentComponent implements OnInit {

  path: string = '/api/content/moderator';

  constructor() { }

  ngOnInit(): void {
  }

}
