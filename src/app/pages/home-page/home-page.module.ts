import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { LoadingModule } from '../../components/loading/loading.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LoadingModule,
    PaginationModule.forRoot(),
  ],
})
export class HomePageModule {}
