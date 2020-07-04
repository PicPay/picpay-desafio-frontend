import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [DialogComponent],
  exports: [DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule
  ]
})
export class DialogModule { }
