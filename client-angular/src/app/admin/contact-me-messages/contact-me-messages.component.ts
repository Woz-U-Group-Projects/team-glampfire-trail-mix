import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/services/message.service';
import { Message } from '@app/models/message';

@Component({
  selector: 'app-contact-me-messages',
  templateUrl: './contact-me-messages.component.html',
  styleUrls: ['./contact-me-messages.component.css']
})
export class ContactMeMessagesComponent implements OnInit {

  messages: Message[] = [];

  constructor(private service: MessageService) { }

  deleteMessage(id: number) {
    this.service.deleteMessage(id);
    alert('Message deleted!');
    location.reload();
  }

  ngOnInit() {
    this.service.getMessages().subscribe(messages => {
      this.messages = messages;
    })

  }

}
