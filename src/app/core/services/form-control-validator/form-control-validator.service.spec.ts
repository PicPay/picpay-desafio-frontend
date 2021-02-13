import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { FormValidatorMessage } from '@core/enums/form-validator-message.enum';
import { SharedModule } from '@shared/shared.module';
import { FormControlValidatorService } from './form-control-validator.service';

describe('FormControlValidatorService', () => {
  let formControlValidatorService: FormControlValidatorService;

  let minLengthControl: AbstractControl;
  let requiredControl: AbstractControl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });

    formControlValidatorService = TestBed.get(FormControlValidatorService);
    minLengthControl = new FormControl(0.9, [
      Validators.min(1),
      Validators.required,
    ]);
    requiredControl = new FormControl('', [Validators.required]);
  });

  it('should retrive required message with form field name', () => {
    const message = formControlValidatorService.getRequiredMessage('Valor');
    expect(message).toBeTruthy();
    expect(message).toEqual(
      FormValidatorMessage.REQUIRED.replace('[FIELD]', 'Valor')
    );
  });

  it('should retrive min length message with form field name', () => {
    const message = formControlValidatorService.getMinLengthErrorMessage(
      1,
      'Valor'
    );
    expect(message).toBeTruthy();
    expect(message).toEqual(
      FormValidatorMessage.MINLENGTH.replace('[FIELD]', 'Valor').replace(
        '[LENGTH]',
        '1'
      )
    );
  });

  it('should retrive min length message with form field name by form control error', () => {
    expect(minLengthControl).toBeTruthy();
    expect(minLengthControl.errors.min).toBeTruthy();

    const message = formControlValidatorService.findError(
      minLengthControl,
      'Valor'
    );

    expect(message).toBeTruthy();
    expect(message).toEqual(
      FormValidatorMessage.MINLENGTH.replace('[FIELD]', 'Valor').replace(
        '[LENGTH]',
        '1'
      )
    );
  });

  it('should retrive required message with form field name by form control error', () => {
    expect(requiredControl).toBeTruthy();
    expect(requiredControl.errors.required).toBeTruthy();

    const message = formControlValidatorService.findError(
      requiredControl,
      'Valor'
    );

    expect(message).toBeTruthy();
    expect(message).toEqual(
      FormValidatorMessage.REQUIRED.replace('[FIELD]', 'Valor')
    );
  });
});
