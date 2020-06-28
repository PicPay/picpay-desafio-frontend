import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsModalRef: BsModalRef;
  user = {} as User;
  users: User[];

  constructor(
    private UserService: UserService,
    private modalService: BsModalService) {}

 ngOnInit() {
    this.getUsers();
  }

  sendPay(user){
    const initialState = {
   
        user
   
    };
    console.log(user)
      this.bsModalRef = this.modalService.show(PaymentModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


  getUsers() {
    this.UserService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users)
    });
  }

}
