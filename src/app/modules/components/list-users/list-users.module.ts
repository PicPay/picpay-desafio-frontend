import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users.component';
import { UserModule } from './components';
import { LoaderModule } from '../loader';
import { FormsModule } from '@angular/forms';

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
    LoaderModule,
    FormsModule
  ],
  providers: [],
})

export class ListUsersModule { }