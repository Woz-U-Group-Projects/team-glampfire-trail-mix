import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './models/settings';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  apiUrl = 'http://localhost:8080/settings';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.apiUrl);
  }
}
