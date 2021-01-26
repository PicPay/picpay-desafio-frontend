import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialogModule,
  MatDialogRef,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
} from "@angular/material";
import { ButtonComponent } from "../../button/button.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PaymentModalComponent } from "./payment-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { TransactionService } from "src/app/services/transaction/transaction.service";
import { of } from "rxjs";
import { TransactionFeedbackModalComponent } from "../transaction-feedback-modal/transaction-feedback-modal.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

describe("PaymentModalComponent", () => {
  let component: PaymentModalComponent;
  let fixture: ComponentFixture<PaymentModalComponent>;
  let TransactionServiceMock: TransactionService;
  let MatDialog: MatDialogRef<TransactionFeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaymentModalComponent,
        ButtonComponent,
        TransactionFeedbackModalComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },
        {
          provide: MatDialog,
          useValue: { open: () => {}, componentInstance: {} },
        },
        TransactionService,
      ],
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [TransactionFeedbackModalComponent] },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    const formBuilder = new FormBuilder();
    fixture = TestBed.createComponent(PaymentModalComponent);
    TransactionServiceMock = TestBed.get(TransactionService);
    component = fixture.componentInstance;
    component.isLoading = false;
    component.cards = [
      {
        card_number: "1111111111111111",
        cvv: 789,
        expiry_date: "01/18",
      },
      {
        card_number: "4111111111111234",
        cvv: 123,
        expiry_date: "01/20",
      },
    ];
    component.user = {
      id: 1018,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "André Castro",
      username: "@andre.castro",
    };
    component.transactionForm = formBuilder.group({
      value: null,
      card: "",
    });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("user name should be the same as user input", () => {
    const name = fixture.debugElement.query(
      By.css(".c-payment-modal__title-name")
    );
    expect(name.nativeElement.innerText).toEqual(component.user.name);
  });

  it("should mark errors when form is invalid", () => {
    const button = fixture.debugElement.query(
      By.css(".c-payment-modal__content-button")
    );
    const spy = spyOn(component.transactionForm, "markAllAsTouched");

    button.triggerEventHandler("buttonClick", 1016);
    expect(spy).toHaveBeenCalled();
  });

  it("button shouldn't call payment function if form is invalid", () => {
    const button = fixture.debugElement.query(
      By.css(".c-payment-modal__content-button")
    );
    const spy = spyOn(TransactionServiceMock, "payload");

    button.triggerEventHandler("buttonClick", 1016);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should call payment function if form is valid", () => {
    const button = fixture.debugElement.query(
      By.css(".c-payment-modal__content-button")
    );

    const transactionSpy = spyOn(
      TransactionServiceMock,
      "payload"
    ).and.returnValue(of());

    component.transactionForm.get("value").setValue(10000);
    component.transactionForm.get("card").setValue("4111111111111234");

    button.triggerEventHandler("buttonClick", 1016);

    expect(transactionSpy).toHaveBeenCalled();
  });

  it("should open feedback modal", () => {
    const button = fixture.debugElement.query(
      By.css(".c-payment-modal__content-button")
    );

    spyOn(TransactionServiceMock, "payload").and.returnValue(of(null));

    const modalSpy = spyOn(component, "openFeedbackModal");

    component.transactionForm.get("value").setValue(10000);
    component.transactionForm.get("card").setValue("4111111111111234");

    button.triggerEventHandler("buttonClick", 1016);
    expect(modalSpy).toHaveBeenCalled();
  });
});
