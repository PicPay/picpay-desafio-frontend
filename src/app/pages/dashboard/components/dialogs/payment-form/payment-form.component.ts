import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/core/entities/user.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  user: User;
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PaymentFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { user: User },
  ) {
    this.initForm();
    this.user = data.user;
  }

  onSubmit(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      return;
    }
    const { value } = formGroup.get('value');

    this.dialogRef.close(value);
  }

  getErrorMessage(): string {
    const control = this.formGroup.get('value');

    return control.hasError('required')
      ? 'Preenchimento obrigatório'
      : control.hasError('higherThanZeroError')
      ? 'O valor precisa ser maior que zero.'
      : '';
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      value: new FormControl(null, [Validators.required, this.higherThanZeroValidator]),
    });
  }

  private higherThanZeroValidator(control: AbstractControl): ValidationErrors {
    return control.value > 0 ? 
      null : 
      { higherThanZeroError : true };
  }

}
