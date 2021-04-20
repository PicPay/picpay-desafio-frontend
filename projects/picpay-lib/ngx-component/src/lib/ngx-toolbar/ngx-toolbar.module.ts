import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxToolbarComponent } from './ngx-toolbar.component';

@NgModule({
  declarations: [NgxToolbarComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [NgxToolbarComponent],
})
export class NgxToolbarModule {}
