import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { User } from "@shared/models/user";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { CurrencyValidator } from "@shared/validators/currency.validator";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent implements OnDestroy {
  @Input() user: User;
  @Input() cards = [];
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnDestroy() {
    this.handleFormReset();
  }

  // Form
  payForm: FormGroup;

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      value: [
        0,
        [
          Validators.required,
          Validators.minLength(3),
          CurrencyValidator.minValue(0.01),
        ],
      ],
      card: [this.cards[0] && this.cards[0].label, [Validators.required]],
    });
  }

  handleFormReset() {
    this.payForm.reset({
      value: 0,
      card: this.cards[0].label,
    });
  }

  // Caso necessite de validação de erro
  getIsFieldInvalid(fieldName: string) {
    const field = this.payForm.get(fieldName);
    return field.invalid && field.touched;
  }

  handleCancelOperation() {
    this.cancel.emit();
    this.handleFormReset();
  }

  handlePayFormSubmit() {
    this.submit.emit(this.payForm);
  }
}
