import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from './../../models/user';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  @Input() user: User;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
