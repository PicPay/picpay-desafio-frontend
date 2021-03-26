import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Output() visibility: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() loading: boolean;
  @Input() form: boolean;
  constructor() {}

  ngOnInit() {}

  buttonAction() {
    this.action.emit(true);
  }
  closeModal() {
    this.visibility.emit(false);
  }
}
