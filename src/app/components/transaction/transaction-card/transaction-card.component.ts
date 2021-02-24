import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CARDS } from 'src/app/shared/mock/card.mock';
import { User } from 'src/app/shared/models/user.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {

  @Input()
  public selectedUser: User;

  public availableCards: any[] = CARDS;

  public success: boolean = false;

  public validCardRegex: RegExp = /^[1]{16}$/;

  public formGroup = new FormGroup({
    value: new FormControl(0, [
      Validators.required
    ]),
    cardNumber: new FormControl('Selecione', [
      Validators.required
    ])
  });

  constructor(
    private toastr: ToastrService,
    private transactionService: TransactionService) { }

  ngOnInit() {
  }

  getLastFourDigits(cardNumber: string): string {
    return cardNumber.trim().substr(cardNumber.length - 4);
  }

  pay(recipientUserId: number) {
    const value = this.formGroup.controls['value'].value;

    const cardNumber = this.formGroup.controls['cardNumber'].value;

    if (!this.isPaymentValid(value, cardNumber)) {
      this.success = false;
    }

    this.transactionService.payUser(recipientUserId, value).subscribe((result) => {
      if (result['success'])
        this.success = true;
    });
  }

  private isPaymentValid(value: number, cardNumber: string) {
    const title = "Houston, we have a problem!";

    if (!value) {
      this.toastr.error("Ei! Você não pode pagar \"nada\" para uma pessoa.", title);

      return false;
    }    

    if (!cardNumber || cardNumber.length !== 16) {
      this.toastr.error("Por favor, verifique o número disc... O cartão informado e tente novamente.", title);

      return false;
    }

    if (!this.validCardRegex.test(cardNumber)) {
      this.toastr.error("O cartão informado é inválido. :-(", title);

      return false;
    }

    return true;
  }
}
