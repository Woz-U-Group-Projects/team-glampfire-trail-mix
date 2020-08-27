import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './models/profile';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  api = this.settings.BASE_URL + 'profileinfo';

  constructor(private http: HttpClient, private settings: SettingsService) { }

  readProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.api);
  }
}
