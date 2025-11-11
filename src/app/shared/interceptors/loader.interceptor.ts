import { Injectable } from '@angular/core';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpEventType,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasterDataService } from '../services';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    constructor(private masterData: MasterDataService) { }

    removeRequest(req: HttpRequest<any>) {
        const me = this;
        const i = me.requests.indexOf(req);
        if (i >= 0) {
            me.requests.splice(i, 1);
        }
        me.masterData.isLoading.next(me.requests.length > 0);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const me = this;
        me.requests.push(req);
        me.masterData.isLoading.next(true);
        return Observable.create((observer: any) => {
            const subscription = next.handle(req)
                .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        observer.next(event);
                    } else if (event instanceof HttpResponse) {
                        me.removeRequest(req);
                        observer.next(event);
                    }
                }, err => {
                    me.removeRequest(req);
                    observer.error(err);
                }, () => {
                    me.removeRequest(req);
                    observer.complete();
                });
            return () => {
                me.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}