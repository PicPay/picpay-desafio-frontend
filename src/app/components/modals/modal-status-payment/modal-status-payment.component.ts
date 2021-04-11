import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal-status-payment",
  templateUrl: "./modal-status-payment.component.html",
  styleUrls: ["./modal-status-payment.component.scss"],
})

export class ModalStatusPaymentComponent implements OnInit {
  private state: Boolean;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.state = data.type;
  }

  ngOnInit() {}
}
