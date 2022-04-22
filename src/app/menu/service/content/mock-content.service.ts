import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from 'src/app/shared/model/content.model';
import { IContentService } from './icontent.service';

@Injectable({
  providedIn: 'root'
})
export class MockContentService implements IContentService {

  constructor() { }
  getContent(path: string): Observable<Content> {
    let content: Content = new Content;
    content.response = 'mock admin content from path: ' + path;
    return of(content);
  }

}
