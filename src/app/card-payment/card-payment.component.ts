import { Component, OnInit, Inject } from '@angular/core';
import { CardPaymentService } from './service/card-payment.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})

export class CardPaymentComponent implements OnInit {

  users;
  user;

  formPay: FormGroup;

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
  
  constructor(
    private service: CardPaymentService, 
    public dialog: MatDialog,
    private fb: FormBuilder 
  ){ 
    this.formPay = this.fb.group({
      card_number: ['', Validators.required],
      value: ['', Validators.required],
      destination_user_id: ['']
    })
  }
  
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    return this.service.userList().subscribe(data => {
      this.users = data;
    })
  }

  openDialog(template, row): void {
    this.user = row
    this.dialog.open(template);
  }

  lastFourNumbers(card){
    if(card) return card.substr(12);
  }

  paymentCard(){
    this.formPay.value.destination_user_id = this.user.id
    return this.service.payment(this.formPay.value).subscribe(data => {
      this.dialog.closeAll();     
      this.dialog.open(Alert, {
        data: {
          content: 'O pagamento foi concluido com sucesso.',
        },
      });
    }, err => {
      this.dialog.open(Alert, {
        data: {
          content: 'O pagamento não foi concluido com sucesso.',
        },
      });
    })
  }
}

@Component({
  selector: 'alert',
  templateUrl: 'dialog/alert.component.html',
  styleUrls: ['dialog/alert.component.scss']
})
export class Alert {

  constructor(
    public dialogRef: MatDialogRef<Alert>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}
