import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    PaymentModalComponent,
    PaymentFormComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
