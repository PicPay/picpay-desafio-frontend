import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/core/interfaces/user.interface';
import { PaymentModalComponent } from '../../payment-modal.component';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent implements OnInit {
  @HostBinding('class.payment-success-container')
  paymentContainer = true;

  user: User;
  paymentValue: Observable<string>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private matDialog: MatDialogRef<PaymentModalComponent | any>,
    private userStore: UserStateService
  ) {}

  ngOnInit(): void {
    this.getUserSelected()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.user = user;
      });
    this.paymentValue = this.getPaymentStateData();
  }

  getUserSelected(): Observable<User> {
    return this.userStore.getUserSelectedForPayment();
  }

  /**
   * Method that gets payment state data.
   */
  getPaymentStateData(): Observable<string> {
    return this.userStore.getPaymentValue();
  }

  /**
   * Method that closes PaymentModal.
   */
  closeModal(): void {
    this.matDialog.close();
  }
}
