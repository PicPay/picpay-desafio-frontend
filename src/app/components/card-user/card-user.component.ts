import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TransactionResponse } from '../../models/transaction-response.interface';
import { ModalService } from '../../services/modal.service';
import { User } from '../../models/user.interface';
import { FormPaymentComponent } from '../form-payment/form-payment.component';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input()
  user: User;

  @ViewChild('paymentMessageResponse', { static: true })
  private paymentMessageResponseTpl: TemplateRef<any>;

  paymentStatus: 'Aprovada' | 'Reprovada';

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit() {
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
