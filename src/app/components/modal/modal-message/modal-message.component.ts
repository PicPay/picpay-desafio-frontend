import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal-message",
  templateUrl: "./modal-message.component.html",
  styleUrls: ["./modal-message.component.css"],
})
export class ModalMessage {
  @Input() sucessPayment: any;
}
