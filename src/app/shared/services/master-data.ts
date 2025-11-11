import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MasterDataService {
  public isLoading = new BehaviorSubject(false);
  constructor() { }

  //Route Path
  landingPath = '';
  loginPath = '/login';
  dashboardPath = '/dashboard';
  gpuPath = '/dashboard/gpu';
  muxListPath = '/mux/list';
  addMuxPath = '/mux/add';
  feedCheckPath = '/feed/check';
  profilePath = '/profile';

  //Pattern Validation
  mobilePattern = '^[0-9]{10}$';
  emailPattern = '^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$';

  // Date format
  dateAndTime = 'MMM dd YYYY - h:mm a';
  dateFormat = 'MMM dd YYYY';

}
