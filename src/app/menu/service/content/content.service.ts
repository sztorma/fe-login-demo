import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/app/shared/model/content.model';
import { environment } from 'src/environments/environment';
import { IContentService } from './icontent.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContentService implements IContentService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getContent(path: string): Observable<Content> {
    return this.http.get<Content>(this.apiUrl + path, httpOptions);
  }

}
