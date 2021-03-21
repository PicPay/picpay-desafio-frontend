import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { CartaoService } from "./cartao.service";

let cartoesMock = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
];

function createResponse(body) {
    return new Observable((observer: Observer<any>) => {
        observer.next(body)
    })
}

class MockHttp {
    get() {
        return createResponse(cartoesMock);
    }
}

describe('Teste Cartao Service', () => {

    let service: CartaoService;
    let http: HttpClient;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                { 
                    provide: HttpClient, 
                    useClass: MockHttp
                },
                CartaoService,
            ]
        });

        http = bed.get(HttpClient);
        service = bed.get(CartaoService);
    });

    it('Deve retornar uma lista de cartões', () => {
        service.obterCartoesUsuario()
            .subscribe((response) => {
                expect(response.length).toBe(2);
                expect(response).toEqual(cartoesMock);
            });
    });
});