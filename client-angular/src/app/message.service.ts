import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './models/message';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl = this.settings.BASE_URL + 'messages';

  constructor(private http: HttpClient, private settings: SettingsService) { }
  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
