import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [UserMenuComponent, ButtonComponent, CreditCardComponent],
  imports: [CommonModule, MatRippleModule, MatIconModule, MatButtonModule, RouterModule],
  exports: [UserMenuComponent, ButtonComponent, CreditCardComponent],
})
export class SharedModule {}
