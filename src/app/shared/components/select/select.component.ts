import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
})
export class SelectComponent {
  @Input() placeholder = "";

  // Model
  @Input() selectValue = "";
  @Output() selectValueChange = new EventEmitter<string>();
  // Bools
  @Input() currencyMask: boolean = false;

  selectDefaultClass = "appearance-none w-full py-2 px-3 bg-transparent focus:outline-none";

  handleSelectValueChange() {
    this.selectValueChange.emit(this.selectValue);
  }
}
