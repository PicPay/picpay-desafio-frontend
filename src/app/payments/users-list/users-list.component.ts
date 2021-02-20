import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { PaymentModalComponent } from 'src/app/shared/payment-modal/payment-modal.component';
import { PaymentService } from '../services/payment.service';
import { Users } from './users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: Users[] = []
  usersList$: Observable<Users[]>;
  payment$: Observable<any>;

  constructor(private PaymentService: PaymentService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.usersList$ = this.PaymentService.listUser();
  }
  payment(){
    //this.payment$ = this.PaymentService.payment();
    //console.log(this.PaymentService.payment())
  }
  openModal(name: string, id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "payment-modal.component";
    dialogConfig.data = {
      title: 'Pagamento para ' + name,
      id: id
    }
    const modalDialog = this.matDialog.open(PaymentModalComponent, dialogConfig);
  }
}
