import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialogModule,
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
import { NgxCurrencyModule } from "ngx-currency";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TransactionService } from "@service/transaction.service";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AvatarComponent } from "src/app/component/avatar/avatar.component";

import { HomeComponent } from "./home.component";
import { FilterPipe } from "src/app/pipe/filter.pipe";
import { UserService } from "@service/user.service";
import { ApiService } from "@service/api.service";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, AvatarComponent, FilterPipe],
      providers: [TransactionService, UserService, ApiService],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
