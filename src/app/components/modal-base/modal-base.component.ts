import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss']
})
export class ModalBaseComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor(private activeModal: NgbActiveModal) { }
  ngOnInit() {
  }

  close() {
    this.activeModal.dismiss();
  }
}
