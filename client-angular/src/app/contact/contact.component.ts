import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../models/message'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  newMessage: Message = new Message();

  createMessage() {
    this.messageService.createMessage(this.newMessage).subscribe(result => {
      this.newMessage = new Message();
    });
  }

  ngOnInit() {
  }

}
