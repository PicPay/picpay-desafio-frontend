import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
