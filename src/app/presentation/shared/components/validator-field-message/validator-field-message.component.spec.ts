import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorFieldMessageComponent } from './validator-field-message.component';
import { FormControl, Validators } from '@angular/forms';

describe('ValidatorFieldMessageComponent', () => {
  let component: ValidatorFieldMessageComponent;
  let fixture: ComponentFixture<ValidatorFieldMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorFieldMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorFieldMessageComponent);
    component = fixture.componentInstance;

    component.control = new FormControl('', Validators.required);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list of erros', () => {
    component.control = new FormControl('', Validators.required);

    expect(component.listOfErrors()).toEqual(['Este campo é obrigatório']);
  });
});
