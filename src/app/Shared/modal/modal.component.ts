import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface SimpleModal {
  title: string;
  text: string;
  success: boolean;
  status: string;
  btn: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SimpleModal
  ) {}


  ngOnInit() {
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
