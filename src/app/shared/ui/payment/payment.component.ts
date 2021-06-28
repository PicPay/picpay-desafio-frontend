
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/modules/home/types';
import { HomeService } from 'src/app/modules/services/home.service';
import { INVALID_CARD, VALID_CARD } from 'src/app/utils/constants';
import { currencyMask } from 'src/app/utils/masks';
import { cards } from './cards';
import { TransactionPayload } from './types';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {
  public user: IUser;
  public subscriptionUser: Subscription;
  public paymentForm: FormGroup;
  public transaction: TransactionPayload;
  public listCards = cards;

  constructor(
    public homeService: HomeService,
    private dialogRef: MatDialogRef<PaymentComponent>,
    private snackBar: MatSnackBar,
    public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getSelectedUser();
    this.buildPaymentForm();
  }

  buildPaymentForm(): void {
    this.paymentForm = this.formBuilder.group({
      cash: ['', [Validators.required, Validators.pattern(currencyMask)]],
      card: ['', Validators.required],
    });
  }

  getSelectedUser(): void {
    this.subscriptionUser = this.homeService.getSelectedUser().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  handlePayment(): void {
    const { value: {cash, card}} = this.paymentForm;
    const selectedCard = this.listCards.filter(item => item.card_number === card );
    this.transaction = {
      ...selectedCard[0],
      destination_user_id: this.user.id,
      value: cash,
    };
    this.homeService.submitPayment(this.transaction).subscribe(response => {
      if (response) {
        this.handleResponse();
      }
    }, error => error );
  }

  handleResponse(): void {
    const { value: {card}} = this.paymentForm;
    if (card === VALID_CARD.card_number) {
      this.snackBar.open('O pagamento foi feito com sucesso!', '', {
        duration: 1500,
        panelClass: ['success']
      });
      this.dialogRef.close(true);
      return;
    }
    if (card === INVALID_CARD.card_number) {
      this.snackBar.open('Erro na transação!', '', {
        duration: 1500,
        panelClass: ['error']
      });
      return;
    }
  }

  ngOnDestroy(): void {
    this.subscriptionUser.unsubscribe();
  }

}
