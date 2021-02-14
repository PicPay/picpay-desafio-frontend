import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentModalComponent } from '../../components/payment-modal/payment-modal.component';
import { UserUsecasesService } from 'src/app/data/usecases/user/user-usecases.service';
import { Observable } from 'rxjs';
import { User } from './../../../../core/interfaces/user.interface';
import { CreditCardVisualizationComponent } from '../../components/credit-card-visualization/credit-card-visualization.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private dialog: MatDialog, private userUsecases: UserUsecasesService) {}

  ngOnInit() {
    this.users$ = this.userUsecases.getAllUsers<User[]>();

    // const user: User = {
    //   id: 1001,
    //   name: 'Eduardo Santos',
    //   img: 'https://randomuser.me/api/portraits/men/9.jpg',
    //   username: '@eduardo.santos',
    // };

    // this.dialog.open(PaymentModalComponent, { data: { user }, panelClass: 'payment-modal' });
  }

  openPaymentModal(user: User): void {
    this.dialog.open(PaymentModalComponent, { data: { user }, panelClass: 'payment-modal' });
  }

  openCreditCardVisualization(): void {
    this.dialog.open(CreditCardVisualizationComponent, { panelClass: 'credit-card-modal' })
  }
}
