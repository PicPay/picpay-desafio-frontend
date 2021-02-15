import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import { TransactionResponse } from './models/transaction-response.interface';
import { User } from './models/user.interface';
import { ModalService } from './services/modal.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('paymentMessageResponse', { static: true })
  private paymentMessageResponseTpl: TemplateRef<any>;

  title = 'Desafio Picpay Front-end';
  users: Observable<User[]>;
  showModalPayment = false;
  showModalPaymentMessage = false;
  paymentStatus: 'Aprovada' | 'Reprovada';

  constructor(
    private userService: UserService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  public payUserModal(user: User): void {
    const modalTitle = `Pagamento para ${user.name}`
    const modalRef = this.modalService.open(FormPaymentComponent, modalTitle, user);

    modalRef.afterClosed$.subscribe((res) => {
      if(res && res.data) {
        this.showModalPaymentMessageResponse(res.data);
      }
    });
  }

  public showModalPaymentMessageResponse(transaction: TransactionResponse): void {
    this.paymentStatus = transaction.status;
    this.modalService.open(
      this.paymentMessageResponseTpl,
      'Recibo de pagamento',
      null
    );
  }
}
