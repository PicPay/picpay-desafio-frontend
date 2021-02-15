import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FORM_CONTROL_VALIDATOR_VOCABULARY } from './form-control-validator.service.vocabulary';

@Injectable()
export class FormControlValidatorService {
  vocabulary = FORM_CONTROL_VALIDATOR_VOCABULARY;

  constructor(private translateService: TranslateService) {}

  findError(control: AbstractControl, formFieldName: string): string {
    return (
      (control.errors.min &&
        this.getMinLengthErrorMessage(control.errors.min.min, formFieldName)) ||
      (control.errors.required && this.getRequiredMessage(formFieldName))
    );
  }

  getMinLengthErrorMessage(minLength: number, formFieldName: string): string {
    const fieldName = this.translateService.instant(formFieldName);
    const message = this.translateService.instant(this.vocabulary.minLength);

    return `${fieldName} ${message} ${minLength}`;
  }

  getRequiredMessage(formFieldName: string): string {
    const fieldName = this.translateService.instant(formFieldName);
    const message = this.translateService.instant(this.vocabulary.required);

    return `${fieldName} ${message}`;
  }
}
