import { Component, Input, HostBinding } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator-field-message',
  templateUrl: './validator-field-message.component.html',
  styleUrls: ['./validator-field-message.component.scss']
})
export class ValidatorFieldMessageComponent {

  private static readonly errorMessages = {
    required: () => 'Este campo é obrigatório',
    min: (params) => 'O valor mínimo permitido é de ' + params.min,
    max: (params) => 'O valor máximo permitido é de ' + params.max,
    minlength: (params) => 'O número mínimo permitido de caracteres é ' + params.requiredLength,
    maxlength: (params) => 'O número máximo permitido de caracteres é ' + params.requiredLength,
    matDatepickerMax: (params) => 'Data inválida',
    matDatepickerParse: (params) => 'Data inválida',
    pattern: (params) => 'Formato inválido',
    error: (params) => params.message,
    obrigatorio: (params) => 'Obrigatório',
    email: (params) => 'E-mail inválido',
    invalidCpf: (params) => 'CPF inválido',
    invalidDate: (params) => 'Data inválida',
    equalCpf: (params) => 'CPF é do cliente, deve-se informar o CPF do representante legal',
    'Mask error': (params) => 'Preencher o campo completo',
    invalidZipcode: (params) => 'CEP inválido',
    fullName: (params) => 'Digite nome e sobrenome',
    alphabet: (params) => 'Para seu nome, use apenas alfabetos',
    phoneNumber: (params) => 'Formato de telefone incorreto',
    existCpf: (params) => 'CPF já existe',
    invalidOnlyWord: (params) => 'Permitido somente letras',
    invalidPassword: (params) => 'Formato inválido',
  };

  @Input() private control: AbstractControlDirective | AbstractControl;

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
