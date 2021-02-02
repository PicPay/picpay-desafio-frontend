import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardMaskPipe } from "src/app/pipes/card-mask.pipe";
import { CardService } from "src/app/services/card.service";
import { PaymentService } from "src/app/services/payment.service";
import { PaymentModalComponent } from "./payment-modal.component";

describe("PaymentModalComponent", () => {
  let component: PaymentModalComponent;
  let fixture: ComponentFixture<PaymentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentModalComponent, CardMaskPipe],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [CardService, PaymentService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
