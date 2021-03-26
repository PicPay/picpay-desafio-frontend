import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Output() visibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  closeModal() {
    this.visibility.emit(false);
  }
}
