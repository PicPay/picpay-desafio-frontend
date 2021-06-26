import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { UsuarioService } from 'src/services/usuario.service';

import { ListaUsuariosComponent } from './lista-usuarios.component';

describe('ListaUsuariosComponent', () => {
  let component: ListaUsuariosComponent;
  let fixture: ComponentFixture<ListaUsuariosComponent>;
  let spyUsuarioService: jasmine.SpyObj<UsuarioService>;

  beforeEach(async(() => {
    spyUsuarioService = jasmine.createSpyObj('UsuarioService', ['getUsuarios']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListaUsuariosComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UsuarioService, useValue: spyUsuarioService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyUsuarioService.getUsuarios.and.returnValue(of([]));
    fixture = TestBed.createComponent(ListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Verificar comportamento inicial do componente', () => {

    it('Deve buscar os usuários', fakeAsync(() => {
      fixture.whenStable().then(() => {
        expect(component.usuarios).toBeTruthy();
      })
    }))

    it('Deve exibir uma mensagem caso não tenha usuários', () => {
      component.usuarios = [];
      component.loading = false;
      fixture.detectChanges();
      const msg = fixture.debugElement.query(By.css('.msg-vazio'))
      expect(msg.nativeElement.textContent.trim()).toBe('Nenhum usuário encontrado!')
    })
  })
});
