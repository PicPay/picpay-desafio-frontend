import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { UserPhotoComponent } from './user-list/user-photo/user-photo.component';
import { ModalComponent } from './user-list/user/modal/modal.component';

@NgModule({
  declarations: [ 
    UserComponent, 
    UserListComponent,
    UserPhotoComponent,
    ModalComponent 
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
