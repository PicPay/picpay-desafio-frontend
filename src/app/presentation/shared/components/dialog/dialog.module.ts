import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ButtonModule } from '../button/button.module';


@NgModule({
  declarations: [DialogComponent, DialogContentComponent],
  exports: [DialogComponent, DialogContentComponent],
  entryComponents: [DialogComponent, DialogContentComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ButtonModule
  ]
})
export class DialogModule { }
