
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message-service/message.service';
import Message from 'src/app/shared/models/message/message.model';

@Component({
  selector: 'pp-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {


  message: Message

  constructor(private messageService: MessageService) {

    this.message = this.messageService.data.message
  }

  ngOnInit() {

  }

}
