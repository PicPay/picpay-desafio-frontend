import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Card } from '@core/domains/card/card.domain';
import { TransactionPayload } from '@core/domains/transaction/transaction-payload.domain';
import { Transaction } from '@core/domains/transaction/transaction.domain';
import { User } from '@core/domains/user/user.domain';
import { ThemeService } from '@core/services/theme/theme.service';
import {
  TransactionForm,
  TransactionFormModalComponent,
} from '@shared/components/transaction-form-modal/transaction-form-modal.component';
import { ActionText } from '@shared/enum/actions-text.enum';
import { SuccessMessage } from '@shared/enum/messages.enum';
import { MOCK_TRANSACTION_FORM_CARDS } from '@shared/mocks/transaction/transaction-form.mock';
import { TransactionService } from '@shared/services/transaction/transaction.service';
import { UserService } from '@shared/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cards: Card[] = MOCK_TRANSACTION_FORM_CARDS;

  users$: Observable<User[]>;

  selectedUser: User;

  isAlternateTheme$: Observable<boolean>;

  paidUsers: (User & { isPaid: boolean })[] = [];

  constructor(
    private userService: UserService,
    private transactionService: TransactionService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.listUsers();
    this.isAlternateTheme$ = this.themeService.isAlternateTheme();
  }

  openTransactionModal(
    user: User,
    transactionForm?: Partial<TransactionForm>
  ): void {
    this.selectedUser = user;

    const modalConfig: MatDialogConfig = {
      hasBackdrop: true,
      data: {
        cards: this.cards,
        user,
        ...transactionForm,
      },
    };

    const dialogRef = this.dialog.open(
      TransactionFormModalComponent,
      modalConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.sendTransaction(result);
      }
    });
  }

  sendTransaction(transactionFormValue: TransactionForm): void {
    const { value, card_number } = transactionFormValue;
    const card = this.cards.find((item) => item.card_number === card_number);

    const payload: TransactionPayload = {
      cvv: card.cvv,
      expiry_date: card.expiry_date,
      card_number,
      value: +value,
      destination_user_id: this.selectedUser.id,
    };

    this.transactionService.postTransaction(payload).subscribe(
      (transaction: Transaction) => {
        transaction.destination_user = this.selectedUser;

        this.paidUsers.push({ ...this.selectedUser, isPaid: true });

        this.showSnackBarMessage(
          `${transaction.destination_user.name} ${SuccessMessage.TRANSACTION_SUCCESS}`,
          ActionText.SNACKBAR_CLOSE
        );
      },
      (error: HttpErrorResponse) => {
        this.showSnackBarMessage(
          error.status.toString(),
          ActionText.SNACKBAR_CLOSE
        )
          .afterDismissed()
          .subscribe(() => {
            this.openTransactionModal(this.selectedUser, {
              value,
              card_number,
            });
          });
      }
    );
  }

  showSnackBarMessage(
    message: string,
    actionName: string
  ): MatSnackBarRef<SimpleSnackBar> {
    const snackBarConfig: MatSnackBarConfig = {
      duration: 3000,
      verticalPosition: 'top',
    };

    return this.snackBar.open(message, actionName, snackBarConfig);
  }

  changeTheme() {
    this.themeService.changeTheme();
  }

  getPaidUser(user: User): boolean {
    return !!this.paidUsers.find((paidUser) => paidUser.id === user.id);
  }
}
