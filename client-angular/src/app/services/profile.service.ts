import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = environment.apiUrl + '/profileinfo';

  constructor(private http: HttpClient) { }

  readProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.apiUrl);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.apiUrl, profile);
  }
}
