import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {Message} from '../models/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  newMessage: Message = new Message();

  createMessage() {
    this.newMessage.createDate = new Date().toISOString();
    this.messageService.createMessage(this.newMessage).subscribe(() => {
      this.newMessage = new Message();
      this.newMessage.read = false;
      alert('Message sent.');
    });
  }

  ngOnInit() {
    this.newMessage.read = false;
  }

}
