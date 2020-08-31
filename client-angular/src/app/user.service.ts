import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { Observable, Subscriber } from 'rxjs';
import { SettingsService } from './settings.service';

const headers = new HttpHeaders().set("Content-Type", "application/json");


@Injectable({
    providedIn: 'root'
  })
  export class UserService{
    api = this.settings.BASE_URL + 'users';

    constructor(private http: HttpClient, private settings: SettingsService) { }

    readUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.api);

    }
    readUser(userId: string): Observable<User> {
        return this.http.get<User>(`${this.api}/${userId}`);
    }

    deleteUser(userId: number): Observable<User> {
        this.http.delete(`${this.api}/${userId}`).subscribe(data => {
            console.log('Removed user');
        });

        return null;
    }

    updateUser(user: User): void {
        console.log("Updating user " + user.id)
        //Update the user on the backend
        this.http.put<User>(`${this.api}/${user.id}`, user, { headers}).subscribe(
            val => {
                console.log("User " + user.id + " updated\n", val);
            },
            response => {
                console.log("An error message has occurred in PUT: ", response);
            }
        );
    }

    createUser(user: User): void {
        console.log("Creating User " + user.id);
        this.http.post<User>(`${this.api}`, user, {headers}).subscribe(
            val => {
                console.log("User " + user.id + "updated\n", val );
            },
            response => {
                console.log("An error message has occurred in USER: ", response);
            }
        );
    }
  }