import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }


  // save(): void {
  //   this.close('saving');
  // }

  // cancel(): void {
  //   this.dismiss('canceling');
  // }
}
