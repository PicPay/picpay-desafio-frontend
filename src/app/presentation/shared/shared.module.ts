import { HomeModule } from './../home/home.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [CommonModule, HomeModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
