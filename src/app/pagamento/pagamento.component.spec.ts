import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { PagamentoService } from 'src/services/pagamento.service';

import { PagamentoComponent } from './pagamento.component';

describe('PagamentoComponent', () => {
  let component: PagamentoComponent;
  let fixture: ComponentFixture<PagamentoComponent>;
  let pagamentoSpy: jasmine.SpyObj<PagamentoService>;

  beforeEach(async(() => {
    pagamentoSpy = jasmine.createSpyObj('PagamentoService', ['getTodosCartoes', 'realizarPagamento']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PagamentoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: PagamentoService, useValue: pagamentoSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ser criado formulário de pagamento', () => {
    expect(fixture.debugElement.query(By.directive(NgForm))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input[name=value]'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('select[name=card]'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('button#pagar'))).toBeTruthy();
  });

  it('Não deve realizar pagamento se o formulátio estiver inválido', () => {
    const testForm = <NgForm>{
      value: {
        value: null,
        card: null
      }
    };
    component.pagar(testForm);
    expect(pagamentoSpy.realizarPagamento).not.toHaveBeenCalled();
    pagamentoSpy.realizarPagamento.calls.reset();

    testForm.value.value = '10';
    component.pagar(testForm);
    expect(pagamentoSpy.realizarPagamento).not.toHaveBeenCalled();
    pagamentoSpy.realizarPagamento.calls.reset();

    testForm.value.value = null;
    testForm.value.card = 10;
    component.pagar(testForm);
    expect(pagamentoSpy.realizarPagamento).not.toHaveBeenCalled();
  })

  it ('Deve realizar pagamento se o formulário estiver válido', () => {
    const testForm = <NgForm>{
      valid: true,
      value: {
        value: 1,
        card: 2
      }
    };
    pagamentoSpy.realizarPagamento.and.returnValue(of({success: true}));
    component.pagar(testForm);
    expect(pagamentoSpy.realizarPagamento).toHaveBeenCalled();
  })
});
