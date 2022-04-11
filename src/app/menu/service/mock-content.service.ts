import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContentService } from './icontent-service';

@Injectable({
  providedIn: 'root'
})
export class MockContentService implements IContentService {

  constructor() { }

  getAdminContent(): Observable<string> {
    return of('mock admin content');
  }

}
