import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
} from "@angular/material";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersService } from "src/app/services/user-service/users.service";
import { UsersServiceMock } from "src/app/services/user-service/users.service.mock";
import { ButtonComponent } from "../button/button.component";
import { PaymentModalComponent } from "../modals/payment-modal/payment-modal.component";

import { UsersListComponent } from "./users-list.component";

describe("UsersListComponent", () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let usersServiceMock: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersListComponent,
        ButtonComponent,
        PaymentModalComponent,
      ],
      imports: [
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
      ],
      providers: [{ provide: UsersService, useClass: UsersServiceMock }],
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [PaymentModalComponent] },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    usersServiceMock = TestBed.get(UsersService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call for get users services on init", () => {
    component.users = [];

    const spy = spyOn(usersServiceMock, "getUsers").and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.users.length).toBeGreaterThan(0);
  });

  it("should have correct user params in the html", () => {
    const img = fixture.debugElement.query(By.css(".c-users__user-img"));

    expect(img.nativeElement.src).toEqual(component.users[0].img);

    const name = fixture.debugElement.query(
      By.css(".c-users__user-info--name")
    );

    expect(name.nativeElement.innerText).toEqual(component.users[0].name);

    const id = fixture.debugElement.query(By.css(".c-users__user-info--id"));

    expect(id.nativeElement.innerText).toEqual(
      `ID: ${component.users[0].id} -`
    );

    const username = fixture.debugElement.query(
      By.css(".c-users__user-info--username")
    );

    expect(username.nativeElement.innerText).toEqual(
      `Username: ${component.users[0].username}`
    );
  });

  it("should call for open payment modal", () => {
    const button = fixture.debugElement.query(By.css(".c-users__user-pay"));
    const spy = spyOn(component, "openPaymentModal").and.callThrough();

    button.triggerEventHandler("buttonClick", component.users[0]);
    expect(spy).toHaveBeenCalled();
  });
});
