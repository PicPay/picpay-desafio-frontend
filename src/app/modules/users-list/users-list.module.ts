import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { MaterialDesignModule } from 'src/app/shared/modules/material-design/material-design-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsersListModule { }
