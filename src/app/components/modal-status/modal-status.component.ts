import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal-status",
  templateUrl: "./modal-status.component.html",
  styleUrls: ["./modal-status.component.scss"],
})
export class ModalStatusComponent implements OnInit {
  status: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) {}

  ngOnInit() {
    this.status = this.data;
  }
}
