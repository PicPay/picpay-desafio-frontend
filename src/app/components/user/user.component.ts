import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { ModalService } from 'src/app/services/modal.service';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private _modalService: ModalService) { }

  ngOnInit() {
  }
  
  openPaymentModal() {
    this._modalService.open(PaymentModalComponent);
  }
}
