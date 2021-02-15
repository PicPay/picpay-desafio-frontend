import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentModalComponent } from '../../components/payment-modal/payment-modal.component';
import { UserUsecasesService } from 'src/app/data/usecases/user/user-usecases.service';
import { Observable } from 'rxjs';
import { User } from './../../../../core/interfaces/user.interface';
import { CreditCardVisualizationComponent } from '../../components/credit-card-visualization/credit-card-visualization.component';
import { finalize } from 'rxjs/operators';
import { UserStateService } from '../../components/payment-modal/user-state.service';
import { TransactionPayload } from 'src/app/core/interfaces/transaction-payload.interface';
import { creditCard } from 'src/app/core/types/credit-card.type';
import { formatCardNumberMask } from 'src/app/data/utils/data-format.util';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  users$: Observable<User[]>;
  loadingUsers = false;
  skeletonItems = new Array(15);
  creditCardsList;

  constructor(
    private dialog: MatDialog,
    private userUsecases: UserUsecasesService,
    private userState: UserStateService,
  ) {}

  ngOnInit() {
    this.users$ = this.getAllUsers();

    this.getAvailableCreditCards();
  }

  getAvailableCreditCards() {
    this.creditCardsList = formatCardNumberMask(this.userState.userCreditCards)
  }

  getAllUsers() {
    this.loadingUsers = true;
    return this.userUsecases
      .getAllUsers<User[]>()
      .pipe(finalize(() => (this.loadingUsers = false)));
  }

  openPaymentModal(user: User): void {
    this.dialog.open(PaymentModalComponent, { data: { user }, panelClass: 'payment-modal' });
  }

  openCreditCardVisualization(card: creditCard): void {
    this.dialog.open(CreditCardVisualizationComponent, {
      panelClass: 'credit-card-modal',
      data: {
        card,
      },
    });
  }
}
