import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { User } from 'src/app/models/user';
import { ModalData } from 'src/app/models/modal-data';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionPayload } from 'src/app/models/transaction';
import { TransactionsService } from 'src/app/services/transactions/transactions.service';
import { PaymentCard } from 'src/app/models/payment-card';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss'],
})
export class PaymentDialogComponent implements OnInit, ModalData<User> {
  @ViewChildren('input') inputs: QueryList<ElementRef>;

  outerData: User;
  cards = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: dayjs('2018-01-31').format('MM/YY'),
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: dayjs('2020-08-31').format('MM/YY'),
    },
  ] as PaymentCard[];
  transactionForm = this.fb.group({
    card_number: [
      null,
      [Validators.required, Validators.min(16), Validators.max(15)],
    ],
    value: [
      null,
      [
        Validators.required,
        Validators.min(0.01),
        Validators.max(5000),
        Validators.maxLength(11),
      ],
    ],
  });

  transaction: TransactionPayload;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private transactionService: TransactionsService,
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.transactionForm.markAllAsTouched();
    if (this.transactionForm.valid) {
      alert('valido');
    } else {
      alert('inválido');
    }
    console.log(this.transactionForm.getRawValue());
  }

  async postPayment() {
    try {
      const response = await this.transactionService
        .postTransaction(this.transaction)
        .toPromise();

      if (response && response.success) {
        // ... Sucesso
      } else {
        // ... Falha
      }
    } catch (ex) {
      console.error(ex);
    }
  }

  closeDialog() {
    this.modalService.hide(1);
  }
}
