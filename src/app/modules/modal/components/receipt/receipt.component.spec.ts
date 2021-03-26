import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ModalComponent } from "../../modal.component";

import { ReceiptComponent } from "./receipt.component";

describe("ReceiptComponent", () => {
  let component: ReceiptComponent;
  let fixture: ComponentFixture<ReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptComponent, ModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
