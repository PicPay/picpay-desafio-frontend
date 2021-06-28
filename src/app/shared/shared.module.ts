import { NgModule } from '@angular/core';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { PaymentComponent } from './ui/payment/payment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser'

const baseModules = [
  FormsModule,
  ReactiveFormsModule,
  CurrencyMaskModule,
  BrowserModule
];

const materialModules = [
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatInputModule,
  MatSelectModule,
];

const components = [
  PaymentComponent
];


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...baseModules,
    ...materialModules,
  ],
  exports: [
    ...baseModules,
    ...materialModules,
    ...components
  ],
  entryComponents: [...components],
})
export class SharedModule { }
