import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.initForm();
  }

  onSubmit(formGroup: FormGroup): void {
    const { value, invalid } = formGroup;

    if (invalid) {
      return;
    }

    this.dialogRef.close(value)
  }

  getControlErrorMessage(controlName: string): string {
    const control = this.formGroup.get(controlName);

    return control.hasError('required')
      ? 'Preenchimento obrigatório.'
      : control.hasError('minlength')
      ? 'Quantidade de digitos insuficiente.'
      : '';
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      card_number: new FormControl(null, [
        Validators.required,
        Validators.minLength(12),
      ]),
      cvv: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      expiry_date: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
}
