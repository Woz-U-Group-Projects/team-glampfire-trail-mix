import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    api = this.settings.BASE_URL + 'users';

    constructor(private http: HttpClient, private settings: SettingsService) { }

    createUser(user: User): Observable<User> {
        console.log('Creating User ' + user.id);
        return this.http.post<User>(this.api, user);
    }

    readUser(): Observable<User> {
        return this.http.get<User>(this.api);
    }

    updateUser(user: User): Observable<User> {
        console.log('Updating user ' + user.id)
        // Update the user on the backend
        return this.http.put<User>(this.api, user);
    }
}
