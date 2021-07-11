import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ModalDataSource {
   allowHtmlMessage: boolean;
   message: string;
   title: string;
}

@Component({
  selector: 'app-simple-message',
  templateUrl: './simple-message.component.html',
  styleUrls: ['./simple-message.component.scss']
})
export class SimpleMessageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SimpleMessageComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ModalDataSource,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  get title(): string {
    return this.data && this.data.title;
  }

  get message(): string {
    return this.data && this.data.message;
  }

  get safeHtml(): SafeHtml {
    const html = this.data && this.data.message;
    if (html) {
      return this.domSanitizer.bypassSecurityTrustHtml(html);
    } else {
      return null;
    }
  }

  get allowHtmlMessage(): boolean {
    return this.data && this.data.allowHtmlMessage;
  }

}
