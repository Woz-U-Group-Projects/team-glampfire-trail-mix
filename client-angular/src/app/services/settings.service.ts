import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../models/settings';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  apiUrl = environment.apiUrl + '/settings';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.apiUrl);
  }

  putSettings(settings: Settings): Observable<Settings> {
    return this.http.put<Settings>(this.apiUrl, settings);
  }
}
