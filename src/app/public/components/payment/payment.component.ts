import { Component, Input, OnChanges } from '@angular/core';
import { CardCredit } from 'src/app/models/card-credit.model';
import { ModalService } from 'src/app/services/modal.service';
import { PaymentService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})

export class PaymentComponent implements OnChanges {
  @Input() model;
  @Input() paymentValue: number = 0;
  @Input() selectedUser: number;

  title: string;
  cards: CardCredit[];

  loading: boolean = false;

  transactionPayload = {
    card_number: 0,
    cvv: 0,
    expiry_date: '',
    destination_user_id: 0,
    value: 0,
  };

  ngOnChanges() {
    this.clean();
    this.loading = false;
  }

  constructor(
    private paymentService: PaymentService,
    private modalService: ModalService
  ) {
    this.cards = [
      {
        card_number: '1111111111111111',
        expiry_date: '01/18',
        cvv: 789,
      },
      {
        card_number: '4111111111111234',
        expiry_date: '01/20',
        cvv: 123,
      },
    ];
    this.model = this.cards[0];
  }

  clean() {
    this.model = this.cards[0];
    this.paymentValue = 0;
  }

  processPayment() {
    this.transactionPayload = this.model;
    this.transactionPayload.destination_user_id = this.selectedUser;
    this.transactionPayload.value = this.paymentValue;

    this.sendPayment();
  }

  sendPayment(): void {
    this.title = 'Recibo de pagamento';
    this.paymentService.sendPayment(this.transactionPayload);
    this.loading = true;
    this.clean();
  }

  onCallClose() {
    this.modalService.close('modal-notification');
    this.loading = false;
  }
}
