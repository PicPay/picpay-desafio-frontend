import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiService', () => {

  let httpClient: HttpClient;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

   it('should be created', () => {
     const service: ApiService = TestBed.get(ApiService);
     expect(service).toBeTruthy();
   });

  it('should get all users', () => {
     httpClient = TestBed.get(HttpClient);
     const users = [{ "id": 1001, "name": "Eduardo Santos", "img": "https://randomuser.me/api/portraits/men/9.jpg", "username": "@eduardo.santos" }, { "id": 1002, "name": "Marina Coelho", "img": "https://randomuser.me/api/portraits/women/37.jpg", "username": "@marina.coelho" }, { "id": 1003, "name": "Márcia da Silva", "img": "https://randomuser.me/api/portraits/women/57.jpg", "username": "@marcia.silva" }, { "id": 1004, "name": "Fabrício Val", "img": "https://randomuser.me/api/portraits/men/98.jpg", "username": "@fabricio.val" }, { "id": 1005, "name": "Júlia Magalhães", "img": "https://randomuser.me/api/portraits/women/44.jpg", "username": "@julia.magalhaes" }, { "id": 1006, "name": "Luma Pereira", "img": "https://randomuser.me/api/portraits/women/13.jpg", "username": "@luma.pereira" }, { "id": 1007, "name": "Danilo Gonçalves", "img": "https://randomuser.me/api/portraits/men/55.jpg", "username": "@danilo.goncalves" }]
     spyOn(httpClient, 'get').and.returnValue(of(users));
     const service: ApiService = TestBed.get(ApiService);
     const spy = jasmine.createSpy('spy');
     service.getUsers().subscribe(spy);
     expect(spy).toHaveBeenCalledWith(users);
  });
});
