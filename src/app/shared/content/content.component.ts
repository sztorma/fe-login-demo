import { Component, Inject, Input, OnInit } from '@angular/core';
import { IContentService } from 'src/app/menu/service/icontent-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(@Inject('IContentService') private contentService: IContentService) { }

  @Input() text!: string;
  serviceData!: string;

  ngOnInit(): void {
    this.serviceData = this.contentService.getAdminContent();
  }

}
