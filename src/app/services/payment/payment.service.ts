import { Payment } from 'src/app/models/payment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.model';
import { PaymentReturn } from 'src/app/models/payment-return.model';

@Injectable()
export class PaymentService {

    private url = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

    constructor(
        private httpClient: HttpClient
    ) { }

    /**
     * Realiza uma ação de pagamento à outro usuário
     *
     * @return Um Observable contendo a efetivação do pagamento
     */
    processPayment(payment: Payment): Observable<PaymentReturn> {
        return this.httpClient.post<PaymentReturn>(this.url, payment);
    }

    /** Valida se um cartão é válido para pagamento ou não */
    validCreditCard(creditCard: CreditCard): boolean {
        if (creditCard.card_number === '1111111111111111' &&
            creditCard.ccv === 789 &&
            creditCard.expire_date === '01/18') {
            return true;
        } else {
            return false;
        }
    }

}
