import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from '@shared/interfaces/card';
import { Payment } from '@shared/interfaces/payment';
import { User } from '@shared/interfaces/user';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { PicPayService } from '@shared/services/picpay.service';
import { PicPayStore } from '@shared/stores/picpay.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  user: User | null = null;
  cards: Card[] = [];
  card: Card | null = null;
  submitted = false;
  payment: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private picPayStore: PicPayStore,
    private picPayService: PicPayService,
    private localStorageService: LocalStorageService
  ) {}

  get amount(): AbstractControl {
    return this.payment.get('amount');
  }

  get comment(): AbstractControl {
    return this.payment.get('comment');
  }

  ngOnInit(): void {
    this.payment = this.formBuilder.group({
      amount: new FormControl(0, [Validators.min(0.01), Validators.max(99999.99)]),
      comment: new FormControl('', Validators.maxLength(150)),
    });

    this.subs.add(
      this.router.routerState.root.firstChild.params.subscribe((params) => {
        this.loadUser(Number(params.id));
      })
    );

    this.picPayService.cards().subscribe((cards: Card[]) => {
      this.cards = cards;
      this.card = cards[0];
    });
  }

  loadUser(userId: number) {
    this.picPayStore.loadUser(userId).subscribe((user: User) => {
      if (!user) {
        this.router.navigate(['/not-found']);
        return;
      }

      this.user = user;
    });
  }

  onChangeCard(card: Card): void {
    this.card = card;
  }

  onPay(): void {
    this.submitted = true;

    if (this.payment.invalid) {
      return;
    }

    const payment: Payment = {
      card_number: this.card.card_number,
      cvv: this.card.cvv,
      expiry_date: this.card.expiry_date,
      destination_user_id: this.user.id,
      value: this.payment.value.amount,
      comment: this.payment.value.comment,
    };

    this.picPayService.payment(payment).subscribe((paymentResponse: Payment) => {
      this.localStorageService.savePayment(paymentResponse).subscribe(() => {
        // TODO: fechar tela com pagamento concluído
      });
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
