import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserSubtitleComponent } from './user-subtitle/user-subtitle.component';
import { UserActionComponent } from './user-action/user-action.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { MatRippleModule } from '@angular/material';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    UserComponent,
    UserTitleComponent,
    UserSubtitleComponent,
    UserActionComponent,
    UserAvatarComponent
  ],
  exports: [
    UserComponent,
    UserTitleComponent,
    UserSubtitleComponent,
    UserActionComponent,
    UserAvatarComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    ButtonModule
  ]
})
export class UserModule { }
