import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    ModalContainerComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ PaymentModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
