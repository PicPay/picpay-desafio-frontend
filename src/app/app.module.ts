import { UsersService } from 'src/app/modules/users/users.service';
import { DialogService } from './modules/dialog/dialog.service';
import { HttpService } from './core/http/http.service';
import { DialogModule } from './modules/dialog/dialog.module';
import { SharedModule } from './modules/shared/shared.module';
import { UsersModule } from './modules/users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    SharedModule,
    DialogModule
  ],
  providers: [
    HttpService,
    DialogService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
