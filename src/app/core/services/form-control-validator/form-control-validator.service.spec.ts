import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FormControlValidatorService } from './form-control-validator.service';
import { FORM_CONTROL_VALIDATOR_VOCABULARY } from './form-control-validator.service.vocabulary';

describe('FormControlValidatorService', () => {
  let formControlValidatorService: FormControlValidatorService;

  let minLengthControl: AbstractControl;
  let requiredControl: AbstractControl;

  const fieldName = 'Valor';
  const fieldValue = 0.9;
  const length = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });

    formControlValidatorService = TestBed.get(FormControlValidatorService);
    minLengthControl = new FormControl(fieldValue, [
      Validators.min(length),
      Validators.required,
    ]);
    requiredControl = new FormControl('', [Validators.required]);
  });

  it('should retrive required message with form field name', () => {
    const message = formControlValidatorService.getRequiredMessage(fieldName);
    expect(message).toBeTruthy();
    expect(message).toContain(
      `${fieldName} ${FORM_CONTROL_VALIDATOR_VOCABULARY.required}`
    );
  });

  it('should retrive min length message with form field name', () => {
    const message = formControlValidatorService.getMinLengthErrorMessage(
      length,
      fieldName
    );
    expect(message).toBeTruthy();
    expect(message).toContain(
      `${fieldName} ${FORM_CONTROL_VALIDATOR_VOCABULARY.minLength}`
    );
  });

  it('should retrive min length message with form field name by form control error', () => {
    expect(minLengthControl).toBeTruthy();
    expect(minLengthControl.errors.min).toBeTruthy();

    const message = formControlValidatorService.findError(
      minLengthControl,
      fieldName
    );

    expect(message).toBeTruthy();
    expect(message).toContain(
      `${fieldName} ${FORM_CONTROL_VALIDATOR_VOCABULARY.minLength}`
    );
  });

  it('should retrive required message with form field name by form control error', () => {
    expect(requiredControl).toBeTruthy();
    expect(requiredControl.errors.required).toBeTruthy();

    const message = formControlValidatorService.findError(
      requiredControl,
      fieldName
    );

    expect(message).toBeTruthy();
    expect(message).toContain(
      `${fieldName} ${FORM_CONTROL_VALIDATOR_VOCABULARY.required}`
    );
  });
});
