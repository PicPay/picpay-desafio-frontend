import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { UserEntity } from 'src/app/core/entities/user-entity';
import { DialogData } from './dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: MatDialogRef<DialogComponent>;

  constructor(
    private dialog: MatDialog
  ) { }

  alert(data: DialogData) {
    const config = new MatDialogConfig();

    config.data = data;

    this.dialogRef = this.dialog.open(DialogComponent, config);
  }

  openPayment(user: UserEntity, data?: DialogData) {
    const config = new MatDialogConfig();

    config.width = '400px';
    config.data = new DialogData();
    config.data.title = 'Pagamento para ' + user.name;
    config.data.data = user;
    config.data.component = data.component;

    this.dialogRef = this.dialog.open(DialogComponent, config);
  }
}
