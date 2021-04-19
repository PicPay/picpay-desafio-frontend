import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditCard, failPaymentTransactionResultMock, IPaymentTransactionResult, User } from '@picpay-lib/ngx-domain';
import { CreditCardService, UserPaymentService } from '@picpay-lib/ngx-service';

@Component({
  selector: 'ngx-pay-to-user',
  templateUrl: './ngx-pay-to-user.component.html',
  styleUrls: ['./ngx-pay-to-user.component.scss'],
})
export class NgxPayToUserComponent implements OnInit {
  cardList!: CreditCard[];
  isPaymentInProcess = false;

  form = this.fb.group({
    amount: [null, [Validators.required]],
    cardNumber: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditCardService,
    private userPaymentService: UserPaymentService,
    public dialogRef: MatDialogRef<NgxPayToUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  ngOnInit(): void {
    this.creditCardService.getList().subscribe((cardList) => {
      this.cardList = cardList;
      this.form.patchValue({
        cardNumber: cardList[0].cardNumber,
      });
    });
  }

  private findCreditCard(cardNumber: string): CreditCard | undefined {
    return this.cardList.find((p) => p.cardNumber === cardNumber);
  }

  pay(): void {
    if (!this.form.valid) {
      return;
    }

    // ignore following not reachable branch
    /* istanbul ignore next*/
    const amount: number = this.form.get('amount')?.value;
    /* istanbul ignore next*/
    const cardNumber: string = this.form.get('cardNumber')?.value;
    const creditCard = this.findCreditCard(cardNumber);

    if (creditCard) {
      this.isPaymentInProcess = true;
      this.userPaymentService.sendMoneyToUser(this.user, creditCard, amount).subscribe(
        (result) => {
          this.dialogRef.close(result);
        },
        (error) => {
          console.log('Handle better the erros when not use a mock api', error);
          const paymentFail: IPaymentTransactionResult = failPaymentTransactionResultMock;
          this.dialogRef.close(paymentFail);
        },
        () => (this.isPaymentInProcess = false)
      );
    }
  }
}
