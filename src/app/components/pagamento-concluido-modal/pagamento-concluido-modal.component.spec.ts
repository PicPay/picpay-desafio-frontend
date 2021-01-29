import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoConcluidoModalComponent } from './pagamento-concluido-modal.component';

describe('PagamentoConcluidoModalComponent', () => {
  let component: PagamentoConcluidoModalComponent;
  let fixture: ComponentFixture<PagamentoConcluidoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoConcluidoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoConcluidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
