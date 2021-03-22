import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { Pagamento } from "../models/pagamento.model";
import { PagamentoResponse } from "../models/response/pagamento-response.model";
import { PagamentoService } from "./pagamento.service";

const pagamentoResponseMock: PagamentoResponse =  {
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

function createResponse(body: any): Observable<any> {
    return new Observable((observer: Observer<any>) => {
        observer.next(body)
    })
}

class MockHttp {
    post() {
        return createResponse(pagamentoResponseMock);
    }
}

describe('PagamentoService', () => {

    let pagamentoService: PagamentoService;

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

        pagamentoService = bed.get(PagamentoService);
    });

    it('Deve efetuar o pagamento para um usuario e retornar com status "Aprovada"', () => {
        pagamentoService.pagarUsuario(pagamentoMock)
            .subscribe((response) => {

                expect(response.status).toBe(pagamentoResponseMock.status);
                expect(response.success).toBe(pagamentoResponseMock.success);
            });
    });
});