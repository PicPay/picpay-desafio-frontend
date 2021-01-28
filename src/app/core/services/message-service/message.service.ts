import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Message from 'src/app/shared/models/message/message.model';
import MessageData from './message.data';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  data: MessageData
  dataAnnouncer: Subject<MessageData>

  constructor() {
    this.data = new MessageData()
    this.dataAnnouncer = new Subject<MessageData>()
  }

  displayMessage(title: string, content: string) {
    this.data.message = new Message(title, content)
    this.data.isDisplayingMessageModal = true
    this.dataAnnouncer.next(this.data)
  }


}
