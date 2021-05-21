import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { UsersService } from 'src/app/data-access/users/services/users.service';
import { User } from 'src/app/data-access/users/user.model';
import { Card } from 'src/app/data-access/transactions/card.model';
import { TransactionComponent } from '../dialogs/transaction/transaction.component';
import { ConfirmComponent } from './../dialogs/confirm/confirm.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  cards: Card[];

  constructor(private usersService : UsersService, private dialog: MatDialog) {
  }
  
  ngOnInit() {
    this.getter();
  }

  getter() : void{
    this.usersService.getUsers().subscribe( (data:User[]) => {
      this.users = data;      
    }, error => {
      console.log(error);      
    })
    
    this.usersService.getCards().subscribe( (data:Card[]) => {
      if(data && data.length > 0){
        for(var i:number = 0; i< data.length; i++) {  
          data[i]['last_dig'] = data[i]['card_number'].slice(12, 16); 
        }
      }
      this.cards = data;      
    }, error => {
      console.log(error);      
    })
  }

  openPaymentDialog(user: User) {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '350px';
    dialogConfig.minHeight = '300px';
    dialogConfig.panelClass = 'custom-dialog-container';

    dialogConfig.data = {
        user: user,
        cards: this.cards
    };

    const transactionDialogRef = this.dialog.open(TransactionComponent, dialogConfig);
    
    transactionDialogRef.afterClosed().subscribe(
      data => {
        dialogConfig.width = '300px';
        dialogConfig.height = '200px';
        dialogConfig.disableClose = false;

        if(data.success){
          dialogConfig.data = {
              sucess: true
          };
          this.dialog.open(ConfirmComponent, dialogConfig);
        }else{
          dialogConfig.data = {
            sucess: false
        };
          this.dialog.open(ConfirmComponent, dialogConfig);
        }
      }
    ); 
}


}
