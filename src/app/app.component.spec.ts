import { HttpClientModule } from "@angular/common/http";
import { TestBed, async } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatRadioModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { NgxCurrencyModule } from "ngx-currency";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from "./pages/home/home.component";
import { TransactionComponent } from "./pages/home/transaction/transaction.component";
import { AvatarComponent } from "./component/avatar/avatar.component";
import { CreditCardMaskPipe } from "./pipe/credit-card-mask.pipe";
import { FilterPipe } from "./pipe/filter.pipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionComponent,
        HomeComponent,
        AvatarComponent,
        CreditCardMaskPipe,
        FilterPipe,
        AppComponent,
        ToolbarComponent,
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
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Desafio Picpay Front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Desafio Picpay Front-end");
  });
});
