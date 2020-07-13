import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ModalPaymentService } from 'src/app/services/modal-payment.service';


@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {

    flagBackdrop = false;
    flagModalPayment = false;
    flagConfirmationPayment = false;
    flagPaymentSuccess = false;
    user;
    userName: string;
    valueOfPayment;
    private cards: Array<object> = [
      // valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];
    selectedCard;
    enableButton = false;

    constructor(private router: Router, private modalPaymentService: ModalPaymentService) { }

    ngOnInit(): void {
      this.selectedCard = this.cards[0];
      this.modalPaymentService.currentUser.subscribe(user => {
        this.user = user;
        this.modalPaymentIsVisible(true);
      });
    }

    getValueOfPayment() {
      this.enableButton = true;
    }

    modalPaymentIsVisible(param) {
      this.flagBackdrop = param;
      this.flagModalPayment = param;
      this.flagConfirmationPayment = false;
    }

    callPayment() {
      // Card Info
      const payload = {
        card_number: this.selectedCard.card_number,
        cvv: this.selectedCard.cvv,
        expiry_date: this.selectedCard.expiry_date,
        destination_user_id: this.user.id,
        value: this.valueOfPayment
      };

      // simulando cenário de erro para cartões diferente do '1111111111111111'
      if (payload.card_number === '1111111111111111') {
        this.modalPaymentService.postPayment(payload).subscribe((res: any) => {
          // aguardando a api voltar
          console.log(res);
          this.flagConfirmationPayment = true;
          this.flagPaymentSuccess = true;
        }, err => {
          console.log(err);
          this.flagConfirmationPayment = true;
          this.flagPaymentSuccess = false;
        });
      } else {
        this.flagConfirmationPayment = true;
        this.flagPaymentSuccess = false;
      }

      this.valueOfPayment = null;
    }
}
