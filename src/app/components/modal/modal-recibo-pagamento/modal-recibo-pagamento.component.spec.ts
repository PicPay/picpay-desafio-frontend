import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReciboPagamentoComponent } from './modal-recibo-pagamento.component';

describe('ModalReciboPagamentoComponent', () => {
  let component: ModalReciboPagamentoComponent;
  let fixture: ComponentFixture<ModalReciboPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReciboPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReciboPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
