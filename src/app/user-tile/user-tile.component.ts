import { Component, Input } from '@angular/core';
import { User } from '../shared/user.model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { PaymentDialogData } from '../payment-dialog/payment-dialog-data.model';

@Component({
    selector: 'app-user-tile',
    templateUrl: './user-tile.component.html',
    styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent {

    @Input()
    user: User;

    constructor(public dialog: MatDialog) {
    }

    openPaymentDialog(): void {
        const dialogRef = this.dialog.open(PaymentDialogComponent, {
            width: '400px',
            data: {destinationUser: this.user} as PaymentDialogData
        });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.animal = result;
        // });
    }

}
