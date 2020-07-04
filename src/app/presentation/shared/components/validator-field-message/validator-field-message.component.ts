import { Component, Input, HostBinding } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator-field-message',
  templateUrl: './validator-field-message.component.html',
  styleUrls: ['./validator-field-message.component.scss']
})
export class ValidatorFieldMessageComponent {

  private static readonly errorMessages = {
    required: () => 'Este campo é obrigatório'
  };

  @Input() control: AbstractControlDirective | AbstractControl;

  @HostBinding('class') class = 'app-validator-field-message';

  constructor() { }

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ValidatorFieldMessageComponent.errorMessages[type](params);
  }

}
