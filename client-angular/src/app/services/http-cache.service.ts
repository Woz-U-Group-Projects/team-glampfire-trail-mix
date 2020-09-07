// From "Client-Side Caching In Angular 8 Using HTTP Interceptor" by Sarathlal Saseendran
// https://www.c-sharpcorner.com/article/client-side-caching-in-angular-8-using-http-interceptor/

import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = { };

  constructor() { }

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  invalidateCache(): void {
    this.requests = { };
  }

}
