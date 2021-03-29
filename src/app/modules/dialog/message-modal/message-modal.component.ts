import { DialogService } from './../dialog.service';
import { HttpService } from './../../../core/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss', '../common-modal-style.scss']
})
export class MessageModalComponent implements OnInit {

  transactionInfo;

  constructor(
    private httpService: HttpService,
    private modalService: DialogService
  ) { }

  ngOnInit() {
    this.httpService.currentTransactionInfo
      .subscribe(obj => this.transactionInfo = obj);
  }

  onCloseBtn() {
    this.modalService.changeModalVisibility(false);
    this.modalService.changeMsgVisibility(false);
  }
}
