import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const me = this;
    if (me.authService.getAuthToken()) {
      request = me.addToken(request);
    }
    return next.handle(request).pipe(tap(() => { }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
          return;
        }
        me.authService.doLogout();
      }
    }));
  }

  private addToken(request: HttpRequest<any>) {
    const me = this;
    let auth_token = me.authService.getAuthToken();
    return request.clone({
      setHeaders: {
        'x-access-token': auth_token ?? ''
      }
    });
  }
}