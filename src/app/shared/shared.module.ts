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
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { MainColorDirective } from './directives/main-color.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    SkeletonDirective,
    UserMenuComponent,
    ButtonComponent,
    CreditCardComponent,
    MainColorDirective,
  ],
  imports: [CommonModule, MatRippleModule, MatIconModule, MatButtonModule, RouterModule,],
  exports: [HeaderComponent, UserMenuComponent, ButtonComponent, CreditCardComponent],
})
export class SharedModule {}
