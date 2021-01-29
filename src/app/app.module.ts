import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";

import { ApiService } from "@service/api.service";
import { UserService } from "@service/user.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AvatarComponent } from "./component/avatar/avatar.component";
import { FilterPipe } from "./pipe/filter.pipe";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { TransactionComponent } from "./pages/home/transaction/transaction.component";
import { CreditCardMaskPipe } from "./pipe/credit-card-mask.pipe";
import { NgxCurrencyModule } from "ngx-currency";
import localePt from "@angular/common/locales/pt";
import { TransactionService } from "@service/transaction.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material";

registerLocaleData(localePt, "pt-BR");

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvatarComponent,
    ToolbarComponent,
    FilterPipe,
    TransactionComponent,
    CreditCardMaskPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    NgxCurrencyModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ApiService,
    UserService,
    TransactionService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
  entryComponents: [TransactionComponent],
})
export class AppModule {}
