import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/entities/user.model';
import { PaymentFormComponent } from '../../../dialogs/payment-form/payment-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnDestroy {
  @Input()
  user: User;

  subscriptions = new Subscription();

  constructor(public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  pay(user: User): void {
    const config = new MatDialogConfig();
    config.data = { user };

    const modal = this.dialog.open(PaymentFormComponent, config);

    this.subscriptions.add(
      modal.afterClosed().subscribe((event) => {
        console.log(event);
      })
    );
  }
}
