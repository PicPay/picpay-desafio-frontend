import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material";
import { MockModule } from "ng-mocks";
import { TransactionApprovalPayload } from "src/app/data-access/transactions/interfaces/transactions-approval-payload.interface";

import { TransactionsConfirmationDialogComponent } from "./transactions-confirmation-dialog.component";

fdescribe("TransactionConfirmationDialogComponent", () => {
  let component: TransactionsConfirmationDialogComponent;
  let fixture: ComponentFixture<TransactionsConfirmationDialogComponent>;
  const mockPayload: TransactionApprovalPayload = {
    success: true,
    status: "xxx",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsConfirmationDialogComponent],
      imports: [MockModule(MatDialogModule)],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: mockPayload }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
