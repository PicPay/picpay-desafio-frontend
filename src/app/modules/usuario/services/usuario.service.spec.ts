import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { UsuarioResponse } from "../models/response/usuario-response.model";
import { UsuarioService } from "./usuario.service";

const listaUsuarioMock: Array<UsuarioResponse> = [
    {
        "id": 1001,
        "name": "Eduardo Santos",
        "img": "https://randomuser.me/api/portraits/men/9.jpg",
        "username": "@eduardo.santos"
    },
    {
        "id": 1002,
        "name": "Marina Coelho",
        "img": "https://randomuser.me/api/portraits/women/37.jpg",
        "username": "@marina.coelho"
    },
]

function createResponse(body: any): Observable<any> {
    return new Observable((observer: Observer<any>) => {
        observer.next(body)
    })
}

class MockHttp {
    get() {
        return createResponse(listaUsuarioMock);
    }
}

describe('UsuarioService', () => {

    let usuarioService: UsuarioService;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                { 
                    provide: HttpClient, 
                    useClass: MockHttp 
                },
                UsuarioService,
            ]
        });

        usuarioService = bed.get(UsuarioService);
    });

    it('Deve retornar uma lista de usuarios', () => {
        usuarioService.obterUsuarios()
            .subscribe((response: Array<UsuarioResponse>) => {
                
                expect(response.length).toBe(2);
                expect(response).toEqual(listaUsuarioMock);
            });
    });
});