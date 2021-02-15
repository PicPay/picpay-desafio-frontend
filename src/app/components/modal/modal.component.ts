import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { ModalRef } from '../../modal-ref';

@Component({
  selector: 'app-overlay',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalTitle: string;
  contentType: 'template' | 'component';
  content: string | TemplateRef<any> | Type<any>;
  context;

  constructor(
    private modalRef: ModalRef
  ) { }

  ngOnInit() {
    this.content = this.modalRef.content;
    this.modalTitle = this.modalRef.modalTitle;

    if (this.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.context = {
        close: this.modalRef.close.bind(this.modalRef)
      };
    } else {
      this.contentType = 'component';
    }
  }

  close() {
    this.modalRef.close(null);
  }
}