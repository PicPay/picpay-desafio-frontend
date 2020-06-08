import { Component, Output, EventEmitter, Input } from "@angular/core";

type Kind = "primary" | "secondary" | "tertiary";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() disabled: boolean = false;
  @Input() kind: Kind = "primary";
  @Input() className = "";
  @Output() click = new EventEmitter<HTMLButtonElement>();

  // Class props
  defaultClass = `px-5 py-2 rounded-md transition duration-50 transform focus:scale-95 focus:outline-none font-medium tracking-white`;
  disabledStateClass = "bg-gray-200 text-gray-400 cursor-not-allowed";

  primaryClass =
    "bg-picpay-500 text-white hover:bg-picpay-700 focus:bg-picpay-700";
  secondaryClass =
    "bg-picpay-100 text-picpay-500 hover:bg-picpay-300 focus:bg-picpay-300";
  tertiaryClass = "text-picpay-500 hover:bg-gray-200 focus:bg-picpay-200";

  getDynamicClass() {
    switch (this.kind) {
      case "primary":
        return this.primaryClass;
      case "secondary":
        return this.secondaryClass;
      case "tertiary":
        return this.tertiaryClass;
    }
  }

  // Methods props
  onClickButton(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  }
}
