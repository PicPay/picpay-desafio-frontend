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
    user;
    userName: string;
    valueOfPayment;
    private cards: Array<Object> = [
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

    constructor(private router: Router, private modalPaymentService: ModalPaymentService) { }

    ngOnInit(): void {
      this.selectedCard = this.cards[0];
      this.modalPaymentService.currentUser.subscribe(user => {
        this.user = user;
        this.modalPaymentIsVisible(true);
      })
    }

    getValueOfPayment(event: any) { // without type info
      this.valueOfPayment = event.target.value
    }
    
    modalPaymentIsVisible(param) {
      this.flagBackdrop = param;
      this.flagModalPayment = param; 
    }

    callPayment() {
      // Card Info
      let payload = {
        card_number: this.selectedCard.card_number,
        cvv: this.selectedCard.cvv,
        expiry_date: this.selectedCard.expiry_date,
        destination_user_id: this.user.id,
        value: this.valueOfPayment
      };

      this.modalPaymentService.postPayment(payload).subscribe((res: any) => {
        // aguardando a api voltar
      }, err => {
        console.log(err);
      });
    }
}
