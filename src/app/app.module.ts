import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UsersComponent } from './views/users/users.component';
import { CardsComponent } from './views/cards/cards.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
;


import { HttpClientModule } from '@angular/common/http';
import { UserPaymentComponent } from './views/payload/user-payment/user-payment.component';

import { NgxMaskModule} from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { CardReadComponent } from './components/card/card-read/card-read.component';
import { ReturnPaymentComponent } from './views/payload/return-payment/return-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UsersComponent,
    CardsComponent,
    UserCreateComponent,
    UserReadComponent,
    UserPaymentComponent,
    CardCreateComponent,
    CardReadComponent,
    ReturnPaymentComponent,
  ],
  entryComponents: [UserPaymentComponent, ReturnPaymentComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    ReactiveFormsModule
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
