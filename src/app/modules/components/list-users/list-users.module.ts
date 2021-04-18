import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users.component';
import { UserModule } from './components'

@NgModule({
  declarations: [
    ListUsersComponent
  ], 
  exports: [
    ListUsersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UserModule,
  ],
  providers: [],
})

export class ListUsersModule { }