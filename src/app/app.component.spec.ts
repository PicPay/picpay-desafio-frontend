import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ModalModule } from "./modules/modal/modal.module";
import { UserModule } from "./modules/user/user.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule,
        ModalModule,
        BrowserModule,
        HttpClientTestingModule,
      ],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
