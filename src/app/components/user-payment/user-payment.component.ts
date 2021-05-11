import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditCard } from 'src/app/models/credit-card';
import { Transaction } from 'src/app/models/transaction';
import { User } from 'src/app/models/user';
import { TransactionService } from 'src/app/services/transaction.service';
import { TransactionResultComponent } from '../transaction-result/transaction-result.component';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {
  @Input() user: User;
  public loading = false;
  constructor(private fb: FormBuilder, private modalService: NgbModal,
              private activeModal: NgbActiveModal, private transactionService: TransactionService) {
  }
  public cards: CreditCard[] = [{
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
    brand: 'visa',
    checked: false
  },
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
    brand: 'mastercard',
    checked: false
  }];
  public paymentForm: FormGroup;
  ngOnInit() {
    this.paymentForm = this.fb.group({
      paymentValue: [null, Validators.min(0)],
      card: [null, Validators.nullValidator]
    });
  }

  getLastDigits(card: CreditCard) {
    return card.card_number.substr(12);
  }

  getBrandLogo(card: CreditCard) {
    return `assets/cards/${card.brand}.png`;
  }

  resetCardChecks() {
    this.cards.forEach(x => x.checked = false);
  }

  setSelectedCard(card: CreditCard) {
    this.resetCardChecks();
    this.cards.find(x => x.card_number === card.card_number).checked = true;
    this.paymentForm.get('card').setValue(card);
  }

  createPayment() {
    const currentCard: CreditCard = this.paymentForm.get('card').value;
    const currentValue: number = this.paymentForm.get('paymentValue').value;
    this.loading = true;
    setTimeout(async () => {
      const validationResult = this.validate(currentCard, currentValue);
      if (!validationResult.valid) {
        this.showResultModal(validationResult);
        this.loading = false;
        return;
      }

      const transaction: Transaction = {
        card_number: currentCard.card_number,
        cvv: currentCard.cvv,
        destination_user_id: this.user.id,
        expiry_date: currentCard.expiry_date,
        value: currentValue
      };

      if (await this.payAsync(transaction)) {
        validationResult.message = 'Pagamento efetuado com sucesso!';
        validationResult.valid = true;
        this.showResultModal(validationResult);
      } else {
        validationResult.message = 'Houve um erro de conexão, tente novamente mais tarde';
        validationResult.valid = false;
        this.showResultModal(validationResult);
      }

      this.loading = false;
      this.activeModal.close();
    }, 500);

  }

  async payAsync(transaction: Transaction): Promise<boolean> {
    try {
      await this.transactionService.createTransaction(transaction).toPromise();
      return true;
    } catch {
      return false;
    }


  }

  showResultModal(validationResult: ValidationResult) {
    const modalRef = this.modalService.open(TransactionResultComponent, { size: 'sm', centered: true });
    const modalInstance: TransactionResultComponent = modalRef.componentInstance;
    modalInstance.message = validationResult.message;
    modalInstance.success = validationResult.valid;
  }

  validate(card: CreditCard, paymentValue?: number): ValidationResult {
    const invalidCardNumber = '4111111111111234';

    if (!card) { return {
      message: 'Selecione um cartão.',
      valid: false
    };
    }

    if (card.card_number === invalidCardNumber) { return {
      message: 'O cartão selecionado é inválido, o pagamento não foi efetuado.',
      valid: false
    };
    }

    if (!paymentValue || paymentValue <= 0) { return {
      message: 'Valor p/ pagamento inválido.',
      valid: false
    };
    } else { return {
      message: '',
      valid: true
    };
    }
  }

}

interface ValidationResult {
  message: string;
  valid: boolean;
}
