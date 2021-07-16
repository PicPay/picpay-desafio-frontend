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

  payCard: FormGroup;

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
    this.payCard = this.fb.group({
      card_number: ['', Validators.required],
      value: ['', Validators.required],
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

  openModal(template, row): void {
    this.user = row
    this.dialog.open(template);
  }

  lastFourNumbers(card){
    if(card) return card.substr(12);
  }

  paymentCard(){
    return this.service.payment(this.payCard.value).subscribe(data => {
      console.log(data);
      this.dialog.open(ModalAlert, {
        data: {
          content: 'O pagamento foi concluido com sucesso.',
        },
      });

    }, err => {
      this.dialog.open(ModalAlert, {
        data: {
          content: 'O pagamento não foi concluido com sucesso.',
        },
      });
      console.log(err);
    })
  }

}

@Component({
  selector: 'alert',
  templateUrl: 'dialog/alert.component.html',
  styleUrls: ['dialog/alert.component.scss']
})
export class ModalAlert {

  constructor(
    public dialogRef: MatDialogRef<ModalAlert>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
