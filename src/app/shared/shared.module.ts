import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SkeletonDirective } from './skeleton.directive';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [HeaderComponent, SkeletonDirective, UserMenuComponent, ButtonComponent],
  imports: [CommonModule, MatRippleModule, MatIconModule,MatButtonModule, RouterModule],
  exports: [HeaderComponent, UserMenuComponent, ButtonComponent],
})
export class SharedModule {}
