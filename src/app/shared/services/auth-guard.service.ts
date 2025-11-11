import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import _ from 'lodash';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate() {
    const me = this;
    return me.authService.isLoggedIn();
  }
}