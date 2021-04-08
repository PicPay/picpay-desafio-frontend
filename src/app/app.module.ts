import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
