import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgxSkeletonUserCardModule, NgxUserCardModule } from '@picpay-lib/ngx-component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, NgxUserCardModule, NgxSkeletonUserCardModule],
})
export class UsersModule {}
