import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserItemComponent } from './UserItem/user-item.component';
import { ModalModule } from './Modal/modal.module';
import { PayFormComponent } from './PayForm/pay-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    PayFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
