import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef } from "@angular/material";
import { By } from "@angular/platform-browser";

import { TransactionFeedbackModalComponent } from "./transaction-feedback-modal.component";

fdescribe("TransactionFeedbackModalComponent", () => {
  let component: TransactionFeedbackModalComponent;
  let fixture: ComponentFixture<TransactionFeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionFeedbackModalComponent],
      imports: [],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have correct title", () => {
    const text = fixture.debugElement.query(By.css(".c-feedback-modal__title"));
    expect(text.nativeElement.innerText).toEqual("Recibo de pagamento");
  });

  it("should have correct text in success", () => {
    component.transactionStatus = { success: true, status: "Aprovada" };
    fixture.detectChanges();

    const text = fixture.debugElement.query(
      By.css(".c-feedback-modal__content-text")
    );
    expect(text.nativeElement.innerText).toEqual(
      "O pagamento foi concluido com sucesso."
    );
  });

  it("should have correct text in failure", () => {
    component.transactionStatus = { success: false, status: "Recusada" };
    fixture.detectChanges();

    const text = fixture.debugElement.query(
      By.css(".c-feedback-modal__content-text")
    );
    expect(text.nativeElement.innerText).toEqual(
      "O pagamento não foi concluido com sucesso."
    );
  });
});
