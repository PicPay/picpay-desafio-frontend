import { animate, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"],
  animations: [
    trigger("onVisibilityChange", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.3s ease-in-out", style({ opacity: 1 })),
      ]),
    ]),
  ],
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
