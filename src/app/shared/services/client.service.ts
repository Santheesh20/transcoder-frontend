import { Injectable } from '@angular/core';
import * as qs from 'qs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = environment.baseUrl;
  private headers = new HttpHeaders({
    'x-app-id': 'Admin',
    'x-user-agent': 'Web',
    'x-app-version': '1.0.0'
  });;

  constructor(
    private httpClient: HttpClient
  ) { }

  buildQueryParam(query: any) {
    query = JSON.parse(JSON.stringify(query));
    return qs.stringify(query, { indices: false });
  }

  getData(url: string, query = {}) {
    const me = this;
    return me.httpClient.get(`${me.baseUrl}${url}?${me.buildQueryParam(query)}`, { headers: me.headers }).toPromise();
  }

  postData(url: string, data: any) {
    const me = this;
    return me.httpClient.post(`${me.baseUrl}${url}`, data, { headers: me.headers }).toPromise();
  }

  exportData(url: string, data: any) {
    const me = this;
    return me.httpClient.post(`${me.baseUrl}${url}`, data, {
      headers: me.headers,
      responseType: 'blob' as 'json'
    }).toPromise();
  }

  putData(url: string, data: any) {
    const me = this;
    return me.httpClient.put(`${me.baseUrl}${url}`, data, { headers: me.headers }).toPromise();
  }

  post(url: string, data: any) {
    const me = this;
    return me.httpClient.post<any>(`${me.baseUrl}${url}`, data, { headers: me.headers });
  }

  upload(url: string, form: any) {
    const me = this;
    return me.httpClient.post(`${me.baseUrl}${url}`, form, {
      headers: me.headers,
      reportProgress: true,
      observe: "events"
    });
  }
}
