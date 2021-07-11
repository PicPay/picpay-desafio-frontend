import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  showPaymentModal: boolean = false;

  user: IUser;

  constructor() { }

  ngOnInit() {
  }

  userSelected(emittedUser: IUser) {
    this.setUser(emittedUser);
    this.tooglePaymentModal();
  }

  setUser(user: IUser) {
    this.user = user
  }

  tooglePaymentModal() {
    this.showPaymentModal = !this.showPaymentModal;
  }

}