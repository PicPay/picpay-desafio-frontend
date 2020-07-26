import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from '../../payment/payment.component';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { ReceiptComponent } from '../../receipt/receipt.component';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() showPayment = new EventEmitter();
  @Input() user: User;
  closeResult: string;
  constructor(
    private modalService: NgbModal,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
  }

  openModal(user: User) {
    const modalRef = this.modalService.open(PaymentComponent, { centered: true });
    modalRef.componentInstance.user = user;

    modalRef.result.then(result => {
      if (result)
        this.transactionService.create(result).subscribe(
          (response) => {
            if (response.success)
              this.openReceiptModal(response.success);

          },
          (error: any) => console.log("Ocorreu um erro..."))
    })
  }

  openReceiptModal(success: boolean) {
    const modalRef = this.modalService.open(ReceiptComponent, { centered: true });
    modalRef.componentInstance.status = success;
  }
}