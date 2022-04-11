import { Injectable } from '@angular/core';
import { IContentService } from './icontent-service';

@Injectable({
  providedIn: 'root'
})
export class ContentService implements IContentService {

  constructor() { }

  getAdminContent(): string {
    return 'admin content';
  }

}
