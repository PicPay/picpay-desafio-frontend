import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { REAL_CURRENCY_MASK_CONFIG } from '@shared/constants/currency-config.const';
import { NgxCurrencyModule } from 'ngx-currency';
import { TransactionFormModalComponent } from './transaction-form-modal/transaction-form-modal.component';
import { TranslateSwitcherComponent } from './translate-switcher/translate-switcher.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    UserCardComponent,
    TransactionFormModalComponent,
    TranslateSwitcherComponent,
  ],
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
    FlexLayoutModule,
    CoreModule,
  ],
  exports: [
    UserCardComponent,
    TranslateSwitcherComponent,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
