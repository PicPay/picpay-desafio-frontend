import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { creditCard } from 'src/app/core/types/credit-card.type';
import { UserUsecasesService } from 'src/app/data/usecases/user/user-usecases.service';
import { DataFormatService } from 'src/app/data/utils/data-format.service';
import { fadeIn } from 'src/app/shared/animations/fade.animations';
import { CreditCardVisualizationComponent } from '../../components/credit-card-visualization/credit-card-visualization.component';
import { PaymentModalComponent } from '../../components/payment-modal/payment-modal.component';
import { UserStateService } from '../../components/payment-modal/services/user-state.service';
import { User } from './../../../../core/interfaces/user.interface';

/**
 * This class represents the PaymentsComponent it renders the payments page.
 */
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn],
})
export class PaymentsComponent {
  users$: Observable<User[]>;
  loadingUsers = false;
  skeletonItems = new Array(15);
  creditCardsList: creditCard[];

  constructor(
    private dialog: MatDialog,
    private userUsecases: UserUsecasesService,
    private userState: UserStateService,
    private dataFormat: DataFormatService
  ) {
    this.users$ = this.getAllUsers();

    this.getAvailableCreditCards();
  }

  /**
   * Method that gets available credit cards and format it's number.
   */
  getAvailableCreditCards(): void {
    this.creditCardsList = this.dataFormat.formatCardNumberMask(this.userState.userCreditCards);
  }

  /**
   * Method that executes a HTTP request and get all users.
   *
   * @returns an Observable<User[]>.
   */
  getAllUsers(): Observable<User[]> {
    this.loadingUsers = true;

    return this.userUsecases
      .getAllUsers<User[]>()
      .pipe(finalize(() => (this.loadingUsers = false)));
  }

  /**
   * Method that opens the payment modal injecting the user data.
   * @param user to selected to be inject in the payment modal.
   */
  openPaymentModal(user: User): void {
    this.dialog.open(PaymentModalComponent, { data: { user }, panelClass: 'payment-modal' });
  }

  /**
   * Method that opens credit card visualization component.
   * @param card credit card to inject.
   */
  openCreditCardVisualization(card: creditCard): void {
    this.dialog.open(CreditCardVisualizationComponent, {
      panelClass: 'credit-card-modal',
      data: {
        card,
      },
    });
  }

  trackByFn(_, user): number {
    return user.id;
  }
}
