import { Component, OnInit, Inject, Optional, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-success-error',
  templateUrl: './modal-success-error.component.html',
  styleUrls: ['./modal-success-error.component.scss'],
})
export class ModalSuccessErrorComponent implements OnInit {

  message = '';
  constructor(public dialogRef: MatDialogRef<ModalSuccessErrorComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: string) { }


  ngOnInit() {
  }

  finishProcess(): void {
    this.dialogRef.close();
  }

}
