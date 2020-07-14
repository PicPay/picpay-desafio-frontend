import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { UserListModule } from './user-list/user-list.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    ErrorsModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
