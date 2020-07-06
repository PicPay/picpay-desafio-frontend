import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UserEntity } from '../../../../core/entities/user-entity';
import { CardEntity } from 'src/app/core/entities/card-entity';
import { ITransactionUsecase } from 'src/app/core/interface';
import { TransactionResponseEntity } from 'src/app/core/entities/transaction-response-entity';
import { DialogService } from '../dialog/dialog.service';
import { DialogData } from '../dialog/dialog-data';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  form: FormGroup;
  user: UserEntity;
  isLoading: boolean;
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
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private fb: FormBuilder,
    private transactionUsecase: ITransactionUsecase,
    private dialogService: DialogService
  ) {
    this.user = dialogData.data;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      card: ['', Validators.required],
      card_number: ['', Validators.required],
      cvv: ['', Validators.required],
      expiry_date: ['', Validators.required],
      destination_user_id: [this.dialogData.data.id, Validators.required],
      value: ['', Validators.required],
    });
  }

  onChangeCard(item: CardEntity) {
    this.form.get('card_number').setValue(item.card_number);
    this.form.get('cvv').setValue(item.cvv);
    this.form.get('expiry_date').setValue(item.expiry_date);
  }

  transaction() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.isLoading = true;

      this.transactionUsecase
        .transaction(this.form.value)
        .pipe(
          finalize(() => this.isLoading = false)
        )
        .subscribe(
          (res: boolean) => this.responseValidate(res),
          err => this.showAlert('O pagamento não foi concluido com sucesso.'));
    }
  }

  responseValidate(res: boolean) {
    let message = '';

    if (res) {
      message = 'O pagamento foi concluido com sucesso.';
    } else {
      message = 'O pagamento não foi concluido com sucesso.';
    }

    this.showAlert(message);
  }

  showAlert(message: string) {
    this.dialogService.alert({
      title: 'Recibo de pagamento',
      description: message
    }).subscribe(res => {
      this.resetForm();
    });
  }

  resetForm() {
    this.form.get('card').reset();
    this.form.get('card_number').reset();
    this.form.get('cvv').reset();
    this.form.get('expiry_date').reset();
    this.form.get('value').reset();
  }

}
