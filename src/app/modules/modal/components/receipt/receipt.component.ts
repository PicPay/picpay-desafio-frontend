import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"],
})
export class ReceiptComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() response: TransactionResponse = {
    status: "",
    success: false,
  };
  @Output() visibility: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  closeModal() {
    this.visibility.emit(false);
  }
}
