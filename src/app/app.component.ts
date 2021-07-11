import { Component, OnInit } from '@angular/core';
import { IResponseModal } from './interfaces/response-modal.interface';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  showPaymentModal: boolean = false;
  showResponseModal: boolean = false;

  user: IUser;
  response: IResponseModal;

  constructor() { }

  ngOnInit() { 
    this.response = {
      success: true,
      status: 'Aprovada'
    }
  }

  userSelected(emittedUser: IUser) {
    this.setUser(emittedUser);
    this.tooglePaymentModal();
  }

  setUser(user: IUser) {
    this.user = user
  }

  setResponse(response: IResponseModal) {
    this.response = response;
  }

  tooglePaymentModal() {
    this.showPaymentModal = !this.showPaymentModal;
  }

  closeResponseModal() {
    this.showResponseModal = false;
  }

  payment(response: IResponseModal) {
    this.tooglePaymentModal()
    this.setResponse(response);
    this.showResponseModal = true;
  }

}