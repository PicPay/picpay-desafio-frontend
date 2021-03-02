import { Observable } from 'rxjs'
import { Transaction, Card } from '../../models'

export interface PayUser {
  payUser: (paymentData: PayUser.Params) => Observable<PayUser.Model>
}

export namespace PayUser {
  export type Model = Transaction
  export type Params = Card & Transaction
}
