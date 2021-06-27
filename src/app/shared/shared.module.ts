import { NgModule } from '@angular/core';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { PaymentComponent } from './ui/payment/payment.component';

const materialModules = [
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule
];

const components = [
  PaymentComponent
]


@NgModule({
  declarations: [PaymentComponent],
  imports: [
  ...materialModules,
  ...components,
  ],
  exports: [
  ...materialModules,
  ...components
  ]
})
export class SharedModule { }
