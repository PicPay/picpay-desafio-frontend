import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MatProgressSpinnerModule } from "@angular/material";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { UsersService } from "src/app/services/user-service/users.service";
import { ButtonComponent } from "../button/button.component";

import { UsersListComponent } from "./users-list.component";

fdescribe("UsersListComponent", () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let UserServiceMock: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent, ButtonComponent],
      imports: [
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [UsersService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    UserServiceMock = TestBed.get(UsersService);
    component.users = [
      {
        id: 1018,
        img: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "André Castro",
        username: "@andre.castro",
      },
    ];

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call for get users services", () => {
    const spy = spyOn(UserServiceMock, "getUsers");

    UserServiceMock.getUsers();

    expect(spy).toHaveBeenCalled();
  });

  it("should have correct user params in the html", () => {
    const img = fixture.debugElement.query(
      By.css(".c-users__user-img")
    );

    expect(img.nativeElement.src).toEqual(component.users[0].img);

    const name = fixture.debugElement.query(
      By.css(".c-users__user-info--name")
    );

    expect(name.nativeElement.innerText).toEqual(component.users[0].name);

    const id = fixture.debugElement.query(
      By.css(".c-users__user-info--id")
    );

    expect(id.nativeElement.innerText).toEqual(`ID: ${component.users[0].id} -`);

    const username = fixture.debugElement.query(
      By.css(".c-users__user-info--username")
    );

    expect(username.nativeElement.innerText).toEqual(`Username: ${component.users[0].username}`);
  });

  it("should call for open payment modal", () => {
    const button = fixture.debugElement.query(By.css(".c-users__user-pay"));
    const spy = spyOn(component, "openPaymentModal");

    button.triggerEventHandler("buttonClick", component.users[0]);
    expect(spy).toHaveBeenCalled();
  });
});
