import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-status-payment-modal",
  templateUrl: "./status-payment-modal.component.html",
  styleUrls: ["./status-payment-modal.component.scss"],
})
export class StatusPaymentModalComponent {
  @Input() aprovedTransaction: boolean;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {}

  toCloseModal() {
    this.closeModal.emit(true);
  }
}
