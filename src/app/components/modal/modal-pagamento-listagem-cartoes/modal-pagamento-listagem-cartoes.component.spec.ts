import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPagamentoListagemCartoesComponent } from './modal-pagamento-listagem-cartoes.component';

describe('ModalPagamentoListagemCartoesComponent', () => {
  let component: ModalPagamentoListagemCartoesComponent;
  let fixture: ComponentFixture<ModalPagamentoListagemCartoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPagamentoListagemCartoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPagamentoListagemCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
