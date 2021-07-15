import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { Observable } from 'rxjs';

import { ModalService } from 'src/app/services/modal/modal.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

import { TransactionPayload } from 'src/app/models/transaction-payload.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  display$: Observable<'open' | 'close'>;
  result: any;

  constructor(
    private service: TransactionService,
    private modalService: ModalService
    ) {}

  @Input() userName: string; userId: number;
  @Output() handleTransaction = new EventEmitter();

  cards = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  transactionForm = new FormGroup({
    transactionValue: new FormControl('', [Validators.required]),
    creditCard: new FormControl('', [Validators.required])
  });


  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  submit(form) {
    const payload: TransactionPayload = {
      card_number: form.controls.creditCard.value.card_number,
      cvv: form.controls.creditCard.value.cvv,
      expiry_date: form.controls.creditCard.value.expiry_date,
      destination_user_id: this.userId,
      value: form.controls.transactionValue.value
    };

    this.service.payUser(payload).subscribe((result) => {
      if (form.controls.creditCard.value.card_number === this.cards[1].card_number) {
        alert('O pagamento não foi concluído com sucesso');
        throw new Error('Número do cartão inválido');
      }
      this.transactionForm.reset(form.controls.transactionValue.value);
      this.result = result;
      if (this.result.success) {
        alert('O pagamento foi concluído com sucesso');
      }
    });
  }

  private close() {
    this.modalService.close();
  }
}
