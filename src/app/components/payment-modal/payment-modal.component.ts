import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

import { PostPaymentService } from '../../../services/postPayment.service'

interface CreditCards {
  id: string
  card_number: string
  cvv: number
  expiry_date: string
}

interface Form {
  paymentValue: number
  selectedCardOption: string
}

@Component({
  selector: 'payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  @Input() userName: string = ''
  @Input() userDestinationId: number = null

  cards: CreditCards[] = [
    // valid card
    {
      id: '1',
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      id: '2',
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ]

  form: FormGroup
  postPaymentResponse: object = {}
  errorMessage: string = ''
  selectedCardOption: string = ''
  cardNumber: string = ''
  expiryDate: string = ''
  cvv: number = null
  isOpenFeedbackModal: boolean = false
  isPaymentValid: boolean = false

  constructor(private paymentService: PostPaymentService) {
    this.criarFormulario()
  }

  ngOnInit() {}

  criarFormulario() {
    this.form = new FormGroup({ 
      paymentValue: new FormControl(null),
      selectedCardOption: new FormControl(''),
   })
  }

  handleCancelPayment() {
    this.selectedCardOption = null
    this.form.reset()
    
    document.querySelector('div.modal-backdrop').classList.add('hidden')
  }

  onFormSubmit(formData: Form) {
    
    const infosCard = this.cards.filter(card => card.id === formData.selectedCardOption)

    infosCard.map(item => {
      this.cardNumber = item.card_number
      this.expiryDate = item.expiry_date
      this.cvv = item.cvv
    })

    const bodyPostPayment = {
      card_number: this.cardNumber,
      cvv: this.cvv,
      expiry_date: this.expiryDate,
      destination_user_id: this.userDestinationId,
      value: formData.paymentValue
    }
    this.paymentService.postPayment(bodyPostPayment).subscribe({
        next: data => {
          this.postPaymentResponse = data
          console.log('POST', this.postPaymentResponse)
        },
        error: error => {
            this.errorMessage = error.message
            alert(`Houve um problema, ${this.errorMessage}. Tente novamente mais tarde.`)
        }
    })

    this.cardNumber === '1111111111111111' ? this.isPaymentValid = true : this.isPaymentValid = false

    this.form.reset()

    this.isOpenFeedbackModal = true
  }

  closeFeedbackModal() {
    this.isOpenFeedbackModal = false
    document.querySelector('div.modal-backdrop').classList.add('hidden')
  }
  

}
