import { Component, Inject, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/IUsers';
import { UsersService } from 'src/app/Service/users/users.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalComponent } from 'src/app/Shared/modal/modal.component';
import { TransactionsService } from 'src/app/Service/transactions/transactions.service';

export interface FeedbackModal {
  id: number;
  name: string;
  img: string;
  username: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Array<IUser>
  textFeedback: string;
  constructor( private _usersService: UsersService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this._usersService.getAllInfos().subscribe((_users) => {
      console.log(_users)
      this.users = _users
    })
  }

  handleItem(event): void {
    this.openPaymentDialog(event.data);
  }

  openPaymentDialog(user): void {
    const dialogRef = this.dialog.open(DialogTransaction, {
      panelClass: ['transaction-dialog', 'custom-modal'],
      data: { user: user }
    });

    /** Após a transação, abre modal de feedback com response */
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.textFeedback = result.success
          ? 'O pagamento foi concluído com sucesso!'
          : 'O pagamento <strong>não</strong> foi concluído com sucesso.';
        this.openFeedbackDialog(result);
      }
    });
  }

  openFeedbackDialog(feedback): void {
    this.dialog.open(ModalComponent, {
      panelClass: ['feedback-dialog', 'simple-modal', 'custom-modal'],
      data: {
        title: 'Recibo de Pagamento',
        text: this.textFeedback,
        success: feedback.success,
        status: feedback.status,
        btn: 'Ok'
      }
    });
  }
}




@Component({
  selector: 'dialog-transaction',
  templateUrl: 'modal-transaction.html'
})
export class DialogTransaction {
  transactionForm: FormGroup;
  loading = false;
  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogTransaction>,
    @Inject(MAT_DIALOG_DATA) public data: FeedbackModal,
    private _formBuilder: FormBuilder,
    private _transactionService: TransactionsService
  ) {
    // Formulário de pagamento e validações
    this.transactionForm = this._formBuilder.group({
      paymentValue: [0, [Validators.required]],
      creditCard: ['', [Validators.required]]
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    this.loading = true;
    let creditCardNumber = this.transactionForm.get('creditCard').value,
      paymentValue = this.transactionForm.get('paymentValue').value,
      paymentData = this.cards.find(
        card => creditCardNumber === card.card_number.slice(-4)
      );

    paymentData['destination_user_id'] = this.data['user'].id;
    paymentData['value'] = paymentValue;

    let response = await this._transactionService.sendPayment(paymentData);
    this.loading = false;
    this.clearForm();
    this.dialogRef.close(response);
  }

  onChange(e): void {
    this.transactionForm.controls[e.target.name].markAsTouched;

    // Garante que o campo de valor terá o valor monetário limpo
    this.transactionForm.controls[e.target.name].setValue(
      this.transactionForm.controls[e.target.name].value
    );
  }

  clearForm(): void {
    this.transactionForm.reset();
    this.transactionForm.markAsUntouched();
    this.transactionForm.markAsPristine();
    Object.keys(this.transactionForm.controls).forEach(name => {
      let control = this.transactionForm.controls[name];
      control.setErrors({ invalid: null });
    });
  }
}
