import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { UserEntity } from 'src/app/core/entities/user-entity';
import { DialogData } from './dialog-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: MatDialogRef<DialogComponent>;
  private panelClass = 'app-dialog-panel';

  constructor(
    public dialog: MatDialog
  ) { }

  alert(data: DialogData): Observable<any> {
    const config = new MatDialogConfig();

    config.width = '460px';
    config.panelClass = 'app-dialog-panel-alert';
    config.data = data;

    return this.dialog.open(DialogComponent, config).afterClosed();
  }

  openPayment(user: UserEntity, data?: DialogData) {
    const config = new MatDialogConfig();

    config.width = '700px';
    config.panelClass = this.panelClass;
    config.data = new DialogData();
    config.data.title = 'Pagamento para ' + user.name;
    config.data.data = user;
    config.data.component = data.component;

    this.dialogRef = this.dialog.open(DialogComponent, config);
  }
}
