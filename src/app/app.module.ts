import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user/user-list/user-list.component';


import { MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentUserDialogComponent } from './components/user/payment-user-dialog/payment-user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaymentUserDialogComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [PaymentUserDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
