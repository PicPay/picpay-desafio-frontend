import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageService } from 'src/app/core/services/message-service/message.service';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

@Component({
  selector: 'pp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(private dialog: MatDialog, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.dataAnnouncer.subscribe(data => { if (data.isDisplayingMessageModal) this.openDialog() })
  }

  openDialog(): void {
    this.dialog.open(MessageModalComponent);
  }
}
