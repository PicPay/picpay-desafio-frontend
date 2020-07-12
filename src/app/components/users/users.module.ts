import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';

@NgModule({
  declarations: [ 
    UserComponent, 
    UserListComponent 
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
