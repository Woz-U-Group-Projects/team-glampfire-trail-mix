import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    apiUrl = environment.apiUrl + '/messages';

    constructor(private http: HttpClient) {
    }

    createMessage(message: Message): Observable<Message> {
        return this.http.post<Message>(this.apiUrl, message);
    }

    readMessages(): Observable<Message[]> {
        return this.http.get<Message[]>(this.apiUrl);
    }

    readMessage(id: string): Observable<Message> {
        return this.http.get<Message>(`${this.apiUrl}/${id}`);
    }

    updateMessage(message: Message): Observable<Message> {
        return this.http.put<Message>(`${this.apiUrl}/${message.id}`, message);
    }

    deleteMessage(id: string): Observable<Message> {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
            console.log('Removed message ' + id);
        });
        return null;
    }
}
