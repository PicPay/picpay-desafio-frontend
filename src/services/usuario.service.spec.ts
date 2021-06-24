import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from 'src/models/User';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { URLS } from 'src/utils/constants';

describe('UsuarioService', () => {
  let httpTestingController: HttpTestingController;
  let service: UsuarioService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getUsuarios', () => {
    const USUARIOS_MOCK: User[] = [{
      id: 1,
      img: 'img.png',
      name: 'João',
      username: 'joaozinho'
    }]

    afterEach(() => {
      httpTestingController.verify();
    });

    it('Deve retornar um array de User', () => {      
      service.getUsuarios().subscribe(r => {
        expect(r[0]).toBeTruthy();
      })
      const req = httpTestingController.expectOne(URLS.GET_USUARIO);
      req.flush(USUARIOS_MOCK)
    })

    it('Caso de erro deve retornar um array vazio', () => {
      service.getUsuarios().subscribe(r => {
        expect(r).toEqual([]);
      })      
      const req = httpTestingController.expectOne(URLS.GET_USUARIO);
      req.error(new ErrorEvent('Erro interno'))
    })
  })
});
