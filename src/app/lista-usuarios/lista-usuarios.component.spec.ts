import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListaUsuariosComponent } from './lista-usuarios.component';

describe('ListaUsuariosComponent', () => {
  let component: ListaUsuariosComponent;
  let fixture: ComponentFixture<ListaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Verificar comportamento inicial do componente', () => {
    it('Deve buscar os usuários', () => {
      fixture.whenStable().then(() => {
        expect(component.usuarios).toBeTruthy();
      })
    })

    it('Deve exibir uma mensagem caso não tenha usuários', () => {
      component.usuarios = [];
      component.loading = false;
      fixture.detectChanges();
      const msg = fixture.debugElement.query(By.css('.msg-vazio'))
      expect(msg.nativeElement.textContent).toBe('enhum usuário encontrado!')
    })
  })
});
