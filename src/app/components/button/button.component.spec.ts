import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatProgressSpinnerModule } from "@angular/material";
import { By } from "@angular/platform-browser";

import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [MatProgressSpinnerModule],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    component.text = "Pagar";
    component.isLoading = false;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("text should be equal to input", () => {
    const text = fixture.debugElement.query(By.css(".c-button__text"));
    expect(text.nativeElement.innerText).toEqual(component.text);
  });

  it("button should call emit function", () => {
    const button = fixture.debugElement.query(By.css(".c-button"));
    const spy = spyOn(component, "onButtonClick");

    button.triggerEventHandler("click", null);
    expect(spy).toHaveBeenCalled();
  });

  it("function shouldn't trigger the emit when loading is true", () => {
    component.isLoading = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css(".c-button"));
    const spy = spyOn(component.buttonClick, "emit");

    button.triggerEventHandler("click", null);
    expect(spy).not.toHaveBeenCalled();
  });

  it("if loading is true, spinner class should exist", () => {
    component.isLoading = true;
    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css(".c-button__spinner"));
    expect(spinner).not.toBeNull();
  });
});
