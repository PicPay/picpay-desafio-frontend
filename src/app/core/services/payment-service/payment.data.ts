import Card from 'src/app/shared/models/payment/card.model'
import Payment from 'src/app/shared/models/payment/payment.model'
import User from 'src/app/shared/models/user/user.model'
import PaymentStatus from '../../../shared/models/payment/payment-status.model'
export default class PaymentData {

    paymentStatus: PaymentStatus
    currentPayment: Payment
    selectedRecipient: User
    savedCards: Array<Card>
    isDisplayingPaymentModal: boolean
    
    constructor(){
        this.paymentStatus = new PaymentStatus()
        this.selectedRecipient = new User()
        this.isDisplayingPaymentModal = false
        this.savedCards = new Array()
    }

}