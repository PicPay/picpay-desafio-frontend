import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { TransactionResultComponent } from '../transaction-result/transaction-result.component';
import { UserPaymentComponent } from '../user-payment/user-payment.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  private modalRef: NgbModalRef;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(user: User) {
    this.modalRef = this.modalService.open(UserPaymentComponent, { size: 'sm', centered: true });
    const component: UserPaymentComponent = this.modalRef.componentInstance;
    component.user = user;
  }

}
