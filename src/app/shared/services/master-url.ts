import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class MasterUrlService {
  constructor() { }
  loginUrl = '/api/v1/auth/login';
  logoutUrl = '/api/v1/auth/logout';
}
