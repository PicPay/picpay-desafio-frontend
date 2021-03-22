import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { Cartao } from "../models/cartao.model";
import { CartaoService } from "./cartao.service";

const cartoesMock: Array<Cartao> = [
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

function createResponse(body: any): Observable<any> {
    return new Observable((observer: Observer<any>) => {
        observer.next(body)
    })
}

class MockHttp {
    get() {
        return createResponse(cartoesMock);
    }
}

describe('CartaoService', () => {

    let cartaoService: CartaoService;

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

        cartaoService = bed.get(CartaoService);
    });

    it('Deve retornar uma lista de cartoes', () => {
        cartaoService.obterCartoesUsuario()
            .subscribe((response: Array<Cartao>) => {

                expect(response.length).toBe(2);
                expect(response).toEqual(cartoesMock);
            });
    });
});