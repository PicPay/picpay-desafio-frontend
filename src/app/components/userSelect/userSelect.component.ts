import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';
import { ModalComponent } from '../modal/modal.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-select',
  templateUrl: './userSelect.component.html',
  styleUrls: ['./userSelect.component.scss']
})

export class UserSelectComponent implements OnInit {
  @Input() user: User;
  @Output() showPayment = new EventEmitter();
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private api: ApiService
  ) {}

  ngOnInit() {
  }

  openModal(user) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.id = user.id;
    modalRef.componentInstance.name = user.name;
    modalRef.componentInstance.title = 'Pagamento para';

    this.modalResults(modalRef.result, user);
  }

  private modalResults(modalRef, user) {
    modalRef.then((paymentTransaction) => {
      const paymentContract = {
        destination_user_id: user.id,
        ...paymentTransaction
      };

      if (typeof paymentTransaction === 'object'
          && paymentTransaction.card_number) {
        this.transactionSubscription(paymentContract, user);
      }
    }, (reason) => {
      this.closeResult = this.getDismissReason(reason);
    });
  }

  private transactionSubscription(paymentContract, user) {
    return this.api.createTransaction(paymentContract)
      .subscribe(data => {
        this.showConclusionModal(data, user);
      });
  }

  private showConclusionModal(transactionResult, user) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.id = user.id;
    modalRef.componentInstance.name = user.name;
    modalRef.componentInstance.transaction = transactionResult;
    modalRef.componentInstance.title = 'Recibo de pagamento';
  }

  private getDismissReason = (reason: any) => (reason);
}
