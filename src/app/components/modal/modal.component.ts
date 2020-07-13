import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() headerContent: string;
  @Output() closeClick = new EventEmitter<MouseEvent>();

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closeClick.emit();
  }

  closeHandler(event: MouseEvent): void {
    this.closeClick.emit(event);
  }
}
