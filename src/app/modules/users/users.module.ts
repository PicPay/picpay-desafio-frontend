import { HttpService } from './../../core/http/http.service';
import { DialogModule } from './../dialog/dialog.module';
import { SharedModule } from './../shared/shared.module';
import { UsersComponent } from './users.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UsersComponent,
    UserContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DialogModule
  ],
  exports: []
})
export class UsersModule { }
