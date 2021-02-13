import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormValidatorMessage } from '@shared/enums/form-validator-message.enum';

@Injectable()
export class FormControlValidatorService {
  constructor() {}

  findError(control: AbstractControl, formFieldName: string): string {
    return (
      (control.errors.min &&
        this.getMinLengthErrorMessage(control.errors.min.min, formFieldName)) ||
      (control.errors.required && this.getRequiredMessage(formFieldName))
    );
  }

  getMinLengthErrorMessage(minLength: number, formFieldName: string): string {
    const replaceMinLengthMessage = (fieldName: string, length: number) =>
      FormValidatorMessage.MINLENGTH.replace('[FIELD]', fieldName).replace(
        '[LENGTH]',
        length.toString()
      );
    return replaceMinLengthMessage(formFieldName, minLength);
  }

  getRequiredMessage(formFieldName: string): string {
    const replaceRequiredMessage = (fieldName: string) =>
      FormValidatorMessage.REQUIRED.replace('[FIELD]', fieldName);
    return replaceRequiredMessage(formFieldName);
  }
}
