import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  it("should create the header", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  });

  it(`should have as appName 'SendPay' and render it`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header.appName).toEqual("SendPay");
  });

  it("should render appName", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p.text-gray-800").textContent).toContain(
      "SendPay"
    );
  });
});
