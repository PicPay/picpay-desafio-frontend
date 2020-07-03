import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UserEntity } from '../../../../core/entities/user-entity';
import { CardEntity } from 'src/app/core/entities/card-entity';
import { ITransactionUsecase } from 'src/app/core/interface';
import { TransactionResponseEntity } from 'src/app/core/entities/transaction-response-entity';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  form: FormGroup;
  user: UserEntity;
  cards: CardEntity[] = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20'
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    private transactionUsecase: ITransactionUsecase
  ) {
    this.user = dialogData.data;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      card: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  transaction() {
    this.transactionUsecase
      .transaction(this.form.value)
      .subscribe((res: TransactionResponseEntity) => {
        console.log(res);
      });
  }

}
