import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/base/base.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BaseModule,
  ]
})
export class DashboardModule { }
