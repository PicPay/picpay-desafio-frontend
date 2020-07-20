import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { User } from 'src/app/models/user';
import { ModalData } from 'src/app/models/modal-data';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { TransactionPayload } from 'src/app/models/transaction';
import { TransactionsService } from 'src/app/services/transactions/transactions.service';
import { PaymentCard } from 'src/app/models/payment-card';
import * as dayjs from 'dayjs';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

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
      expiry_date: dayjs('2020-01-31').format('MM/YY'),
    },
  ] as PaymentCard[];
  transactionForm = this.fb.group({
    card_number: [null, [Validators.required]],
    value: [
      null,
      [
        Validators.required,
        Validators.min(10.0),
        Validators.max(5000),
        Validators.maxLength(11),
      ],
    ],
  });

  transaction: TransactionPayload;
  isLoaded = true;

  constructor(
    private fb: FormBuilder,
    private alert: AlertsService,
    private modalRef: BsModalRef,
    private transactionService: TransactionsService,
  ) {}

  ngOnInit() {}

  onSubmit(ngForm: NgForm) {
    this.transactionForm.markAllAsTouched();

    if (this.transactionForm.valid) {
      // Validação fake por conta do retorno sempre do servidor ser sempre positivo.
      switch (this.transactionForm.get('card_number').value) {
        case '4111111111111234':
          this.showPaymentError();
          break;
        default:
          this.postPayment(ngForm);
      }
    } else {
      this.resetFormWithValue(ngForm);
      this.alert.showErrorToast(
        'Verifique o preenchimento das informações na tela',
      );
    }
  }

  showPaymentError() {
    // Código fake para simular uma request com falha
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = true;
      this.modalRef.hide();
      this.alert.showErrorDialog(
        'Houve um problema com a aprovação do seu cartão e o pagamento não foi aprovado. Você receberá mais informações em seu e-mail.',
      );
    }, 3000);
  }

  async postPayment(ngForm: NgForm) {
    try {
      this.isLoaded = false;
      const response = await this.transactionService
        .postTransaction(this.transaction)
        .toPromise();

      if (response && response.success) {
        this.modalRef.hide();
        this.alert.showSuccessDialog(
          'O pagamento foi efetivado com sucesso. O comprovante será enviado para o seu e-mail e também para seu amigo(a).',
        );
      } else {
        this.alert.showErrorToast();
        this.resetFormWithValue(ngForm);
      }
    } catch (ex) {
      this.alert.showErrorToast();
      console.error(ex);
    } finally {
      this.isLoaded = true;
    }
  }

  resetFormWithValue(ngForm: NgForm) {
    ngForm.resetForm(ngForm.value);
    ngForm.form.markAllAsTouched();
    ngForm.form.updateValueAndValidity();
  }

  closeDialog() {
    this.modalRef.hide();
  }
}
