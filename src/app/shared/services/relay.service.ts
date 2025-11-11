import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class RelayService {
  private subject = new Subject<any>();
  sendDetail(value: any) {
    this.subject.next({ content: value });
  }
  getDetail(): Observable<any> {
    return this.subject.asObservable();
  }
}