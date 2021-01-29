import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoModalComponent } from './pagamento-modal.component';

describe('PagamentoModalComponent', () => {
  let component: PagamentoModalComponent;
  let fixture: ComponentFixture<PagamentoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
