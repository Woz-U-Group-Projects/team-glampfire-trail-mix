import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Registered } from '@app/models/registered';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    apiUrl = environment.apiUrl + '/users';

    constructor(private http: HttpClient) { }

    createUser(user: User): Observable<User> {
        console.log('Creating User ' + user.id);
        return this.http.post<User>(this.apiUrl, user);
    }

    readUser(): Observable<User> {
        return this.http.get<User>(this.apiUrl);
    }

    updateUser(user: User): Observable<User> {
        console.log('Updating user ' + user.id)
        // Update the user on the backend
        return this.http.put<User>(this.apiUrl, user);
    }

    isRegistered(): Observable<Registered> {
        return this.http.get<Registered>(this.apiUrl + '/registered');
    }
}
