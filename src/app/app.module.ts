import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './utils/modal/modal.component';
import { UsersComponent } from './payment/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
