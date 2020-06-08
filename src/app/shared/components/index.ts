import { ButtonComponent } from "./button/button.component";
import { ModalComponent } from "./modal/modal.component";
import { UserContentComponent } from "./user-content/user-content.component";
import { SelectComponent } from "./select/select.component";
import { UserContentPlaceholderComponent } from "./user-content/user-content-placeholder/user-content-placeholder";
import { FormGroupComponent } from "./form-group/form-group.component";
import { InputDirective } from "./input/input.directive";
import { CurrencyInputDirective } from "./input/currency-input.directive";

export const components = [
  ButtonComponent,
  ModalComponent,
  UserContentComponent,
  UserContentPlaceholderComponent,
  SelectComponent,
  FormGroupComponent,

  InputDirective,
  CurrencyInputDirective,
] as const;
