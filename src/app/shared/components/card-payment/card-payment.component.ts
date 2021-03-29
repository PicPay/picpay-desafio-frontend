import { Component, Input, OnInit } from '@angular/core';
import { PaymentStorage } from '@shared/interfaces/payment-storage';
import { User } from '@shared/interfaces/user';
import { PicPayStore } from '@stores/picpay.store';

@Component({
  selector: 'ngx-card-payment',
  templateUrl: 'card-payment.component.html',
  styleUrls: ['card-payment.component.scss'],
})
export class CardPaymentComponent implements OnInit {
  @Input() payment: PaymentStorage;
  @Input() isFullPage: boolean;

  user: User;

  constructor(private picPayStore: PicPayStore) {}

  ngOnInit(): void {
    if (this.payment) {
      this.picPayStore.loadUser(this.payment.destination_user_id).subscribe((user: User) => {
        this.user = user;
      });
    }
  }
}
