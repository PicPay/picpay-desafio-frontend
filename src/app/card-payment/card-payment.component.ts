import { Component, OnInit } from '@angular/core';
import { CardPaymentService } from './card-payment.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})


export class CardPaymentComponent implements OnInit {

  users;
  user;

  cards = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];
  
  constructor(private service: CardPaymentService, public dialog: MatDialog) { }
  
  
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    return this.service.userList().subscribe(data => {
      this.users = data;
    })
  }

  openModal(template, row): void {
    this.user = row
    this.dialog.open(template);
  }

  lastFourNumbers(card){
    if(card) return card.substr(12);
  }

  paymentCard(card){
    return this.service.payment(card).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
