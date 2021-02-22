import { Component, Inject, Input, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent implements OnInit {
  @Input() bodyMessage: string
  @Input() title: string
  showSpinner = false
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private modalData: any,
    public dialogRef: MatDialogRef<SuccessModalComponent>,
  ) {}

  ngOnInit() {
    this.showSpinner = true
    setTimeout(() => {
      this.showSpinner = false
    }, 2000)
  }

  close() {
    this.dialogRef.close()
  }
}
