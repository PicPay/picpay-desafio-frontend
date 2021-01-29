import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionComponent } from "./transaction.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatRadioModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { NgxCurrencyModule } from "ngx-currency";
import { AvatarComponent } from "src/app/component/avatar/avatar.component";
import { TransactionService } from "@service/transaction.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "../home.component";
import { CreditCardMaskPipe } from "src/app/pipe/credit-card-mask.pipe";
import { FilterPipe } from "src/app/pipe/filter.pipe";
import { ApiService } from "@service/api.service";

describe("TransactionComponent", () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionComponent,
        HomeComponent,
        AvatarComponent,
        CreditCardMaskPipe,
        FilterPipe,
      ],
      providers: [
        TransactionService,
        ApiService,
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
