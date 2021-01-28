import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PaymentService } from 'src/app/core/services/payment-service/payment.service';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';

@Component({
  selector: 'pp-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private dialog: MatDialog, private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.dataAnnouncer.subscribe(data => { if (data.isDisplayingPaymentModal) this.openDialog() })
  }

  openDialog(): void {
    this.dialog.open(PaymentModalComponent);
  }

}
