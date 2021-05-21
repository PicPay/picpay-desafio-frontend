import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormGroup, FormControl} from '@angular/forms';
import { TransactionPayload } from 'src/app/data-access/transactions/transaction.model';
import { Card } from 'src/app/data-access/transactions/card.model';
import { TransactionsService } from 'src/app/data-access/transactions/services/transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactionPayload: TransactionPayload;
  dataparent: any;
  
  public paymentForm = new FormGroup({
    amount: new FormControl(''),
    cardSelected: new FormControl()
  });
  

  constructor(
    public dialogRef: MatDialogRef<TransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private transactionsService : TransactionsService,
  ){ 
    this.dataparent = data;
  }

  ngOnInit() { }


  private close(sucess?:any) {
    this.dialogRef.close(sucess);
  }

  pay() {

    if(
      !this.paymentForm.value.amount
      ||
      !this.paymentForm.value.cardSelected
      ){
        return;
      }
    
    const cardSelected: Card = this.dataparent.cards.find(
      (element:any) => element.card_number === this.paymentForm.value.cardSelected
      );
    

    this.transactionPayload = {
      card_number: cardSelected.card_number,
      cvv: cardSelected.cvv,
      expiry_date: cardSelected.expiry_date,
      destination_user_id: this.dataparent.user.id,
      value: this.paymentForm.value.amount.toFixed(2),
    };

    // Simulando um cartão inválido pois a API sempre retorna aprovado.
    if (this.transactionPayload.card_number === '4111111111111234') {
      this.close({'error':true,'details':'Cartão Inválido'});
    }

    this.transactionsService.setTransaction(this.transactionPayload).subscribe( (data:any) => {
      this.close(data);
    }, error => {
      console.log(error);
      this.close({'error':true,'details':error});
    })
    
  }

}
