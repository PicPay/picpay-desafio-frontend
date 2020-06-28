import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.scss']
})
export class ModalSuccessComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
  ) { }
  ngOnInit() {
    setTimeout(() => {
      this.bsModalRef.hide();
    }, 2000);
  }
}
