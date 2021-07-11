import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/base/base.module';

import { DashboardComponent } from './dashboard.component';
import { PagesRoutingModule } from './dashboard-routing.module';
import { SelectedCardComponent } from './components/selected-card/selected-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact-list/components/contact/contact.component';
import { CashbackInfoComponent } from './components/cashback-info/cashback-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentFormComponent } from './components/dialogs/payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { AddCardComponent } from './components/dialogs/add-card/add-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SelectedCardComponent,
    ContactListComponent,
    ContactComponent,
    CashbackInfoComponent,
    PaymentFormComponent,
    AddCardComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BaseModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
  ],
  entryComponents: [
    PaymentFormComponent,
  ],
})
export class DashboardModule {}
