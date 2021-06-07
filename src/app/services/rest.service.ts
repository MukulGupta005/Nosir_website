import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient : HttpClient) { }

  get(url: string): Observable<any> {
    // let headers = new HttpHeaders();
    return this.httpClient.get(url);
  }

  post(url: string, body: any | null, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    return this.httpClient.post(url, body, { headers: headers });
  }

  upload(url: string, body: any | null, options: any = {}): Observable<any> {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    return this.httpClient.post(url, body, { headers: headers, reportProgress: true, observe: 'events' });
  }

  put(url: string, body: any | null, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    return this.httpClient.put(url, body, { headers: headers });
  }

  delete(url: string, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    return this.httpClient.delete(url, { headers: headers });
  }
}
