import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserSubtitleComponent } from './user-subtitle/user-subtitle.component';
import { UserActionComponent } from './user-action/user-action.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';



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
    CommonModule
  ]
})
export class UserModule { }
