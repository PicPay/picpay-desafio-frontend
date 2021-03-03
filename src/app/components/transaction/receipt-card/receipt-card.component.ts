import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-receipt-card',
  templateUrl: './receipt-card.component.html',
  styleUrls: ['./receipt-card.component.scss']
})
export class ReceiptCardComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input()
  success: boolean;

  @Input()
  transaction: TransactionPayload;

  @Output()
  closeReceiptModal = new EventEmitter<boolean>();

  recipientUser: User;

  formattedValue: string = "R$ 0,00";

  today: string = new Date().toLocaleDateString();

  ngOnInit() {
    if (this.transaction) {
      this.userService.getUserById(this.transaction.destination_user_id).subscribe((user) => {
        this.recipientUser = user[0];
      });

      this.formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        }).format(this.transaction.value);
    }
  }

  close() {
    this.closeReceiptModal.emit(true);
  }

  getLastFourDigits(cardNumber: string): string {
    return Utils.getLastFourDigits(cardNumber);
  }
}
