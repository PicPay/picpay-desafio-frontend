import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Helper } from "src/app/utils/helpers";
import { ModalComponent } from "../../modal.component";

import { PaymentComponent } from "./payment.component";

describe("PaymentComponent", () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PaymentComponent, ModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [Helper],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Verifica valores inicias - loading", () => {
    expect(component).toBeTruthy();
    expect(component.loading).toBeDefined();
    expect(component.loading).toEqual(false);
  });
  it("Verifica se o cartão está valido", async () => {
    spyOn(component.transactionResponse, "emit");

    component.user = {
      id: 230,
      img: "ds",
      name: "asd",
      username: "123",
    };
    component.currentTransaction = {
      transcation_id: "32",
      destination_user_id: 230,
      value: 3,
      card_number: "123",
      cvv: 123,
      expiry_date: "01/28",
    };
    expect(component.currentTransaction.expiry_date).toBe("01/28");

    fixture.detectChanges();
    component.getTransaction();
    expect(component.transactionResponse.emit).toHaveBeenCalled();
    expect(component.transactionResponse.emit).toHaveBeenCalledWith({
      status: "Este não é um cartão válido!",
      success: false,
    });
  });
});
