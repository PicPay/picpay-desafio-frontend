import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ButtonComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HeaderComponent, ButtonComponent, ModalComponent]
})
export class SharedModule { }
