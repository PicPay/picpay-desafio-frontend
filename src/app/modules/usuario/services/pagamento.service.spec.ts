import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { Pagamento } from "../models/pagamento.model";
import { ResultadoPagamentoResponse } from "../models/response/resultado-pagamento-response.model";
import { PagamentoService } from "./pagamento.service";

const ResultadoPagamentoMock: ResultadoPagamentoResponse =  {
    success: true,
    status: "Aprovada",
    emoji: null
}

const pagamentoMock: Pagamento = {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
    destination_user_id: 1001,
    value: 15.00
}

function createResponse(body) {
    return new Observable((observer: Observer<any>) => {
        observer.next(body)
    })
}

class MockHttp {
    post() {
        return createResponse(ResultadoPagamentoMock);
    }
}

describe('Teste Usuario Service', () => {

    let service: PagamentoService;
    let http: HttpClient;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                { 
                    provide: HttpClient, 
                    useClass: MockHttp 
                },
                PagamentoService,
            ]
        });

        http = bed.get(HttpClient);
        service = bed.get(PagamentoService);
    });

    it('Deve efetuar o pagamento para um usuario', () => {
        service.pagarUsuario(pagamentoMock)
            .subscribe((response) => {
                expect(response.status).toEqual(ResultadoPagamentoMock.status);
                expect(response.success).toEqual(ResultadoPagamentoMock.success);
            });
    });
});