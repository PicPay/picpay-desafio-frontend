import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserModule } from '../../shared/components/user/user.module';
import { DialogModule } from '../../shared/components/dialog/dialog.module';


@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    CommonModule,
    UserModule,
    DialogModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
