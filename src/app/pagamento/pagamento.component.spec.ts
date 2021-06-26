import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { PagamentoComponent } from './pagamento.component';

describe('PagamentoComponent', () => {
  let component: PagamentoComponent;
  let fixture: ComponentFixture<PagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PagamentoComponent ]
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
  })
});
