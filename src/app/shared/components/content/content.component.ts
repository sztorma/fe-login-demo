import { Component, Inject, Input, OnInit } from '@angular/core';
import { IContentService } from 'src/app/menu/service/icontent-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(@Inject('IContentService') private contentService: IContentService) { }

  @Input() path!: string;
  content!: string;

  ngOnInit(): void {
    this.contentService.getAdminContent(this.path).subscribe(response => {
      this.content = response;
    });

  }

}
