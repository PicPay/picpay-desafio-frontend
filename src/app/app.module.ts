import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UsersModule } from './components/users/users.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    UsersModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
