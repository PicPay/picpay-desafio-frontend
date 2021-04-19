import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../../../services';
import TransactionType from '../../../types/transaction/transaction.type';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<PayComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private ts:TransactionService
  ) { }

  public process: boolean = false;
  public loading: boolean = false;
  public success: boolean = false;
  public form = this.fb.group({
    value:[null,Validators.required],
    card:[null,Validators.required],
  })


  ngOnInit() {
  }

  isFormValid(){
    return this.form.status === 'VALID';
  }


  pay(){ 
    const {cvv, card_number, expiry_date, error} = this.getCard(this.form.value.card);
    if(error) return "Cartão não encontrado"

    const payload: TransactionType ={
      destination_user_id: this.data.id,
      value: this.form.value.value,
      card_number,
      cvv,
      expiry_date,
    };
    this.doTransaction(payload);
  }

  doTransaction(payload: TransactionType){
    this.process = true;
    this.loading = true;
    this.ts.postTransaction(payload).subscribe((res: any)=>{
      this.loading = false;
      this.success = res.success;
    })
  }

  close(){
    this.dialogRef.close();
  }

  getCard(id:number){
    if(!id) return {error: true};
    return this.data.cards.find(card => card.id == id );
  }
  transformCard(string:string){
    if(!string) return 'Valor inválido';
    return `Cartão com final ${string.match("(.{4})\s*$")[0]}`;
  }
}
