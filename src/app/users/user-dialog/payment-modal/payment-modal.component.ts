import { User } from './../../../data/types';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  destinationUser: User

  constructor( private service: UsersService ) { }

  ngOnInit() {
    this.service.currentDestinationUSer
    .subscribe(user => this.destinationUser = user)
  }

  onCloseBtn() {
    this.service.changeModalVisibility(false)
  }
}
