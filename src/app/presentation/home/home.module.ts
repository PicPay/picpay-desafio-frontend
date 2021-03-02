import { CardFinalNumberPipe } from './components/pay/card-final-number.pipe'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  UserComponent,
  ModalComponent,
  NotifyComponent,
  PayComponent
} from './components/index'
import { HomeComponent } from './home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    CardFinalNumberPipe,
    HomeComponent,
    UserComponent,
    ModalComponent,
    NotifyComponent,
    PayComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
