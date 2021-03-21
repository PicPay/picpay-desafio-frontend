import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() public user: User;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {}

  public payUser() {
    if (this.user) {
      this.paymentService.startPayment(this.user);
    }
  }
}
