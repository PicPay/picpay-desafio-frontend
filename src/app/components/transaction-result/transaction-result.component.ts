import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-result',
  templateUrl: './transaction-result.component.html',
  styleUrls: ['./transaction-result.component.scss']
})
export class TransactionResultComponent implements OnInit {
  @Input() message: string;
  @Input() success: boolean;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  getIconLocation() {
    return this.success ? 'assets/icons/success.svg' : 'assets/icons/fail.svg';
  }

  close() {
    this.activeModal.close();
  }

  getButtonValue() {
    return this.success ? 'Fechar' : 'Voltar';
  }
}
