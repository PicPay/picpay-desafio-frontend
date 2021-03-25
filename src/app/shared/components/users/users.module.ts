import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CardUserModule } from '../card-user/card-user.module';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [CommonModule, CardUserModule],
})
export class UsersModule {}
