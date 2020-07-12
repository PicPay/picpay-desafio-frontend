import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PayModalComponent } from './components/pay-modal/pay-modal.component';
import { PayUsersComponent } from './components/pay-users/pay-users.component';
import { PayUserComponent } from './components/pay-users/pay-user/pay-user.component';
import { PayMessageComponent } from './components/pay-message/pay-message.component';
import { PayUserService } from './services/pay-users.service';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    PayModalComponent,
    PayUsersComponent,
    PayUserComponent,
    PayMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PayUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
