import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  /**
   * Start the payment process
   * @param {User} receiver The user that will receive the payment
   */
  public startPayment(receiver: User) {
    // TODO: Implement method
  }
}
