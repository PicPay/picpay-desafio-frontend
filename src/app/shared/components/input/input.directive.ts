import { Directive } from "@angular/core";

@Directive({
  selector: "input[appInput], select[appInput]",
  host: {
    "[class]": "[inputDefaultClass]",
  },
})
export class InputDirective {
  inputDefaultClass =
    "w-full py-2 px-3 bg-transparent focus:outline-none appearance-none";
}
