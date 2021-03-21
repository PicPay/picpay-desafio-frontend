import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { MockModule } from "ng-mocks";
import { Card } from "src/app/data-access/transactions/interfaces/card.interface";
import { TransactionsDialogData } from "src/app/data-access/transactions/interfaces/transactions-dialog-data.interface";
import { TransactionPayload } from "src/app/data-access/transactions/interfaces/transactions-payload.interface";
import { User } from "src/app/data-access/users/interfaces/users.interface";

import { TransactionsDialogComponent } from "./transactions-dialog.component";

fdescribe("PayDialogComponent", () => {
  let dialogRef: MatDialogRef<TransactionsDialogComponent>;
  let component: TransactionsDialogComponent;
  let fixture: ComponentFixture<TransactionsDialogComponent>;
  const mockUser: User = {
    id: 123,
    name: "xxx",
    img: "yyy",
    username: "zzz",
  };
  const mockCards: Card[] = [
    {
      card_number: "xxx",
      cvv: 123,
      expiry_date: "yyy",
    },
  ];
  const mockData: TransactionsDialogData = {
    selectedUser: mockUser,
    cards: mockCards,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsDialogComponent],
      imports: [
        ReactiveFormsModule,
        MockModule(MatFormFieldModule),
        MockModule(MatInputModule),
        MockModule(MatSelectModule),
        MockModule(MatDialogModule),
      ],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: { close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialogRef = TestBed.get(MatDialogRef);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have onCloseDialog function (invalid form)", () => {
    // P
    const dialogRefCloseSpy = spyOn(dialogRef, "close");
    // A
    component.onCloseDialog();
    // V
    expect(dialogRefCloseSpy).not.toHaveBeenCalled();
  });

  it("should have onCloseDialog function (valid form)", () => {
    // P
    const value: number = 123;
    const expectedTransactionPayload: TransactionPayload = {
      card_number: mockCards[0].card_number,
      cvv: mockCards[0].cvv,
      expiry_date: mockCards[0].expiry_date,
      destination_user_id: mockUser.id,
      value,
    };

    component.transactionForm
      .get("amount")
      .setValue(expectedTransactionPayload.value);

    component.transactionForm
      .get("cards")
      .setValue(expectedTransactionPayload.card_number);

    const dialogRefCloseSpy = spyOn(dialogRef, "close");
    // A
    component.onCloseDialog();
    // V
    expect(dialogRefCloseSpy).toHaveBeenCalledWith(expectedTransactionPayload);
  });

  it("should have onCancel function", () => {
    // P
    const dialogRefCloseSpy = spyOn(dialogRef, "close");
    // A
    component.onCancel();
    // V
    expect(dialogRefCloseSpy).toHaveBeenCalledWith(null);
  });
});
