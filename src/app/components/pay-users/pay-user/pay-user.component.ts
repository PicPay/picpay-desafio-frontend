import { Component, OnInit, Input, TemplateRef, OnDestroy, ElementRef } from '@angular/core';
import { PayUser } from './pay-user.model';
import { PayUserService } from '../../../services/pay-users.service';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pay-user',
  templateUrl: './pay-user.component.html',
  styleUrls: ['./pay-user.component.scss']
})
export class PayUserComponent implements OnInit, OnDestroy {

  @Input() payUser: PayUser;
  @Input() modalReference: BsModalRef;

  constructor(
    private payUserService: PayUserService,
    private modalService: BsModalService
  ) { }

  private subscriptions: Array<Subscription> = [];

  modalRef: any;


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.map(s => s.unsubscribe());
  }

  userSendMoney: PayUser;

  getUsersFilter(id: number) {
    const sub = this.payUserService.getUsers()
      .subscribe((data) => {
        this.userSendMoney = data.find(user => user.id == id);
      })
    this.subscriptions.push(sub);
  }

  openModal(template: ElementRef<any>){
    this.modalReference = this.modalService.show(template);
  }

}
