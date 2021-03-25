import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Card } from "src/app/modules/transaction/models/card";
import { PaymentService } from "../../services/payment.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentModalComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() transaction: Transatcion[] = [];
  @Output() visibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  cards: Card[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.paymentService.getCards().subscribe((cards) => (this.cards = cards));
  }

  getTransaction() {}
  closeModal() {}
}
