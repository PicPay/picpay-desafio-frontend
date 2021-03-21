import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserListItemComponent, UserListComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserListComponent],
})
export class UserModule {}
