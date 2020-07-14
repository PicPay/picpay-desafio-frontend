import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list.component';
import { UserPhotoComponent } from './user/user-photo/user-photo.component';
import { ModalComponent } from './user/modal/modal.component';
import { PayButtonComponent } from './user/pay-button/pay-button.component';

@NgModule({
  declarations: [ 
    UserComponent, 
    UserListComponent,
    UserPhotoComponent,
    ModalComponent,
    PayButtonComponent 
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
  ]
})
export class UserListModule { }
