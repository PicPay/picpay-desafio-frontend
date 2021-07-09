import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/base/base.module';

import { DashboardComponent } from './dashboard.component';
import { PagesRoutingModule } from './dashboard-routing.module';
import { SelectedCardComponent } from './components/selected-card/selected-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact-list/components/contact/contact.component';
import { CashbackInfoComponent } from './components/cashback-info/cashback-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SelectedCardComponent,
    ContactListComponent,
    ContactComponent,
    CashbackInfoComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, BaseModule],
})
export class DashboardModule {}
