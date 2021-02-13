import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { REAL_CURRENCY_MASK_CONFIG } from '@shared/constants/currency-config.const';
import { NgxCurrencyModule } from 'ngx-currency';
import { TransactionFormModalComponent } from './transaction-form-modal/transaction-form-modal.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UserCardComponent, TransactionFormModalComponent],
  entryComponents: [TransactionFormModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(REAL_CURRENCY_MASK_CONFIG),
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  exports: [UserCardComponent],
})
export class ComponentsModule {}
