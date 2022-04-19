import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../service/auth/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request;
    const jwt: string = this.storageService.getJwt();
    if (jwt != null) {
      newRequest = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + jwt) })
    }
    return next.handle(newRequest);
  }
}
