import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendPayment(){
    console.log('foi')
  }

  /*setTimeout(()=>{    //<<<---    using ()=> syntax
    this.messageSuccess = false;
}, 3000);*/
}
