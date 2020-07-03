import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
