import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessDialogComponent implements OnInit {
  msg = '';

  constructor(private modalRef: BsModalRef) {}

  ngOnInit() {}

  closeDialog() {
    this.modalRef.hide();
  }
}
