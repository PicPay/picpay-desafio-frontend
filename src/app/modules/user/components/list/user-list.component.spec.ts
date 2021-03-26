import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PaymentComponent } from "src/app/modules/modal/components/payment/payment.component";
import { ReceiptComponent } from "src/app/modules/modal/components/receipt/receipt.component";
import { ModalComponent } from "src/app/modules/modal/modal.component";
import { UserComponent } from "../user/user.component";
import { UserListComponent } from "./user-list.component";

describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        UserListComponent,
        UserComponent,
        ModalComponent,
        PaymentComponent,
        ReceiptComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
