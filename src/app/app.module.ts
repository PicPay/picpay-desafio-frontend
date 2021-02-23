import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
