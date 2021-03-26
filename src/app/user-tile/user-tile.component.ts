import { Component, Input } from '@angular/core';
import { User } from '../shared/user.model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

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
        this.dialog.open(PaymentDialogComponent, {
            width: '400px',
            data: this.user
        });
    }

}
