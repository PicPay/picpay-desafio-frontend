import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CardUserModule } from '@shared/components/card-user/card-user.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, CardUserModule],
})
export class UsersModule {}
