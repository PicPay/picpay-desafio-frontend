import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersListModule { }
