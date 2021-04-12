import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-status-payment-modal",
  templateUrl: "./status-payment-modal.component.html",
  styleUrls: ["./status-payment-modal.component.scss"],
})
export class StatusPaymentModalComponent implements OnInit {
  @Input() aprovedTransaction: boolean;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toCloseModal() {
    this.closeModal.emit(true);
  }
}
