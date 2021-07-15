import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { ListComponent } from './list/list.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { MatDialogModule, MatDialogRef, MatIconModule, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ButtonComponent, ModalComponent, ListComponent],
  imports: [
    CommonModule,
    AngularPaginatorModule,
    FormsModule,
    MatIconModule,
    MatDialogModule
  ],
  
  exports: [FooterComponent, HeaderComponent, ButtonComponent, ModalComponent, ListComponent ],
  entryComponents: [ModalComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ]
})
export class SharedModule { }
