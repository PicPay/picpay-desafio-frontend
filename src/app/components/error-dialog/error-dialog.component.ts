import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorDialogComponent implements OnInit {
  msg = '';

  constructor(private modalRef: BsModalRef) {}

  ngOnInit() {}

  closeDialog() {
    this.modalRef.hide();
  }
}
