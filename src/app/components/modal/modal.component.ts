import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() title;
  @Input() name;
  @Input() id;
  @Input() transaction = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.title = `${this.title} ${this.name}`;
  }

  closeModal() {
    this.activeModal.dismiss('cancel');
  }
}
