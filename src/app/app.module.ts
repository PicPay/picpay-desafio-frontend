import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { UsersListComponent } from './pages/users-list/users-list.component'
import { FeedbackModalComponent } from './components/feedback-modal/feedback-modal.component'
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    FeedbackModalComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
