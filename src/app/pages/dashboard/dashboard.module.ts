import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/base/base.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesRoutingModule } from './dashboard-routing.module';
import { SelectedCardComponent } from './components/selected-card/selected-card.component';

@NgModule({
  declarations: [DashboardComponent, SelectedCardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BaseModule,
  ]
})
export class DashboardModule { }
