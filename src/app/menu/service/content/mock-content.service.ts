import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContentService } from './icontent.service';

@Injectable({
  providedIn: 'root'
})
export class MockContentService implements IContentService {

  constructor() { }

  getAdminContent(path: string): Observable<string> {
    return of('mock admin content from path: ' + path);
  }

}
