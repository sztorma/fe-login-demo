import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContentService } from './icontent-service';

@Injectable({
  providedIn: 'root'
})
export class ContentService implements IContentService {

  constructor() { }
  getAdminContent(): Observable<string> {
    throw new Error('Method not implemented.');
  }

}
