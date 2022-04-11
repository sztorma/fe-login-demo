import { Injectable } from '@angular/core';
import { IContentService } from './icontent-service';

@Injectable({
  providedIn: 'root'
})
export class MockContentService implements IContentService {

  constructor() { }

  getAdminContent(): string {
    return 'mock admin content';
  }

}
