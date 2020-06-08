import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";

let modalId = 0;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() label = "";
  @Input() class = "";
  @Input() isOpen: boolean = false;
  @Output() requestClose = new EventEmitter();

  modalId = null;
  modalLabel = null;

  defaultDialogClass = "focus:outline-none z-10 bg-white rounded-md relative container flex flex-col";

  ngOnInit() {
    modalId++;
    this.modalId = `modal-${modalId}`;
    this.modalLabel = `modal-label-${modalId}`;

    document.body.style.overflow = "hidden";
  }

  ngOnDestroy() {
    document.body.style.overflow = null;
  }

  handleRequestClose() {
    this.requestClose.emit();
  }
}
