import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ModalPaymentService } from 'src/app/services/modal-payment.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: Observable<any[]>;

    constructor(private router: Router, private usersService: UsersService, private modalPaymentService: ModalPaymentService) { }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe((res: any) => {
          this.users = res;
        }, err => {
          console.log(err);
        });
    }

    callModalPayment(user) {
      this.modalPaymentService.openModalPayment(user);
    }
}
