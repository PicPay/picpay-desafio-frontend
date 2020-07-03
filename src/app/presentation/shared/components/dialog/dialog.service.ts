import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { UserEntity } from 'src/app/core/entities/user-entity';
import { DialogData } from './dialog-data';
import { PaymentComponent } from '../payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openPayment(user: UserEntity) {
    console.log(user);

    const config = new MatDialogConfig();

    config.width = '400px';
    config.data = new DialogData();
    config.data.title = 'Pagamento para ' + user.name;
    config.data.component = PaymentComponent;

    this.dialog.open(DialogComponent, config);
  }
}
