import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotificacaoComponent } from './modal-notificacao.component';

describe('ModalNotificacaoComponent', () => {
  let component: ModalNotificacaoComponent;
  let fixture: ComponentFixture<ModalNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
