import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './models/settings';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // BASE_URL = 'http://52.156.70.167:8080/glampfire/';
  BASE_URL = 'http://52.156.70.167:8080/glampfiredev/';
  // BASE_URL = 'http://localhost:8080/';
  apiUrl = this.BASE_URL + 'settings';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.apiUrl);
  }
}
