import {Component, OnInit} from '@angular/core';
import {MessageService} from '@app/services/message.service';
import {Message} from '@app/models/message';

@Component({
  selector: 'app-contact-me-messages',
  templateUrl: './contact-me-messages.component.html',
  styleUrls: ['./contact-me-messages.component.css']
})
export class ContactMeMessagesComponent implements OnInit {

  messages: Message[] = [];
  encodeURIComponent = encodeURIComponent;

  constructor(private service: MessageService) { }

  deleteMessage(id: string) {
    this.service.deleteMessage(id);
    alert('Message deleted!');
    location.reload();
  }

  ngOnInit() {
    this.service.readMessages().subscribe(messages => {
      this.messages = messages;
      this.messages.forEach((message, index) => {
        const date: Date = new Date(message.createDate.substring(0, message.createDate.length - 5));
        this.messages[index].prettyDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(date);
        this.messages[index].prettyTime = new Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric'}).format(date);
      });
    });

  }

}
