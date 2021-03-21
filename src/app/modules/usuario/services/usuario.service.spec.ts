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

function createResponse(body) {
    return new Observable((observer: Observer<any>) => {
        observer.next(body)
    })
}

class MockHttp {
    get() {
        return createResponse(listaUsuarioMock);
    }
}

describe('Teste Usuario Service', () => {

    let service: UsuarioService;
    let http: HttpClient;

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

        http = bed.get(HttpClient);
        service = bed.get(UsuarioService);
    });

    it('Deve retornar uma lista de usuarios', () => {
        service.obterUsuarios()
            .subscribe((response) => {
                expect(response.length).toBe(2);
                expect(response).toEqual(listaUsuarioMock);
            });
    });
});