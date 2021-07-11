import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { ICard } from 'src/app/interfaces/card.interface';
import { IResponseModal } from 'src/app/interfaces/response-modal.interface';
import { ITransactionPayload } from 'src/app/interfaces/transaction-payload.interface';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  @Input() showModal: boolean
  @Input() user: IUser
  @Output() close = new EventEmitter<boolean>()
  @Output() payment = new EventEmitter<IResponseModal>()

  cards: ICard[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  form: FormGroup;
  get value() { return this.form.get('value'); }
  get credit_card() { return this.form.get('credit_card'); }

  labelBtnPay: string = 'Pagar'
  labelBtnCancel: string = 'Cancelar'
  loading: boolean = false
  payload: ITransactionPayload
  response: IResponseModal

  INPUT_REQUIRED_MSG: string = 'O campo é obrigatório e deve ser maior que R$ 0,01';
  SELECT_REQUIRED_MSG: string = 'Você deve selecionar um cartão válido';

  constructor(private formBuilder: FormBuilder, private service: PaymentService) { }

  ngOnInit() { 
    
    this.form = this.formBuilder.group({
      value: [0.01, [Validators.required, Validators.min(0.01)]],
      credit_card: [this.cards[0], Validators.required]
    });
  
  }

  cancel() {
    this.close.emit(true)
  }

  pay() {
    
    this.parseFormRequest()

    this.showLoading()

    this.submitPayment()

  }

  showLoading() {
    this.loading = !this.loading
  }

  submitPayment() {
    this.service.post(this.payload).subscribe(res => {

      this.payment.emit(res);
      
    })
  }

  parseFormRequest() {

    this.payload = {
      destination_user_id: this.user.id,
      card_number: this.form.value.credit_card.card_number,
      cvv: this.form.value.credit_card.cvv,
      expiry_date: this.form.value.credit_card.expiry_date,
      value: this.form.value.value,
    }
    
  }

  lastFourDigits(card_number: string) {
    return card_number.substr(card_number.length - 4)
  }

}
