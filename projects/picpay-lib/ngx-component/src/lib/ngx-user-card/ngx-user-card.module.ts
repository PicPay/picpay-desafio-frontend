import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUserCardComponent } from './ngx-user-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { NgxPayToUserModule } from '../dialog';

@NgModule({
  declarations: [NgxUserCardComponent],
  imports: [CommonModule, MatDialogModule, MatCardModule, MatButtonModule, NgxPayToUserModule],
  exports: [NgxUserCardComponent],
})
export class NgxUserCardModule {}
