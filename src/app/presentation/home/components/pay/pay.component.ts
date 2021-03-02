import { Transaction_Status } from '../../../../data/protocols/transaction-status.model'
import { FAILED_TRANSACTION } from './../../../../data/test/mock/transactions/failed-transaction.mock'
import { SUCCESS_TRANSACTION } from './../../../../data/test/mock/transactions/success-transaction.mock'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User, Card } from 'src/app/core/domain/models'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  @Input()
  user: User

  @Input()
  cards: Card[]

  @Output()
  hide = new EventEmitter<void>()

  payForm: FormGroup
  selectedCard: Card
  notify: Boolean
  settedStatus: Transaction_Status
  value: Number

  constructor(private formBuilder: FormBuilder) {
    this.payForm = this.formBuilder.group({
      value: ['', [Validators.min(1), Validators.required]],
      selectedCard: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.notify = false
  }

  handlerHide() {
    this.hide.emit()
  }

  pay() {
    const card = this.payForm.value.selectedCard
    const invalidCard = card === '4111111111111234'
    if (!invalidCard) {
      this.notifyPayment(SUCCESS_TRANSACTION)
    } else this.notifyPayment(FAILED_TRANSACTION)
  }

  notifyPayment(status: Transaction_Status) {
    this.notify = true
    this.settedStatus = status
  }
}
