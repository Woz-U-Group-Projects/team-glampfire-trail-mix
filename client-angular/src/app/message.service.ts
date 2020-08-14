import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './models/message';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl: string = "http://localhost:8080/messages";
  constructor(private http: HttpClient) { }
  createMessage(message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
