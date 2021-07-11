import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";

import { PaymentService } from './payment.service';
import { HttpClient } from '@angular/common/http';
import { IResponseModal } from 'src/app/interfaces/response-modal.interface';
import { ICard } from 'src/app/interfaces/card.interface';
import { ITransactionPayload } from 'src/app/interfaces/transaction-payload.interface';

describe('PaymentService', () => {

    let http: HttpClient;
    let service: PaymentService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should return the response message', () => {
        const mockResponse: IResponseModal = {
            "success": true,
            "status": "Aprovada"
        }

        const mockCard: ICard = {
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
        }
    
        const payload: ITransactionPayload = {
            destination_user_id: 1001,//Mock id
            card_number: mockCard.card_number,
            cvv: mockCard.cvv,
            expiry_date: mockCard.expiry_date,
            value: 0.01, //Valid value
        }
    
        http = TestBed.get(HttpClient)
        service = TestBed.get(PaymentService)
        const spy = jasmine.createSpy('spy')
    
        spyOn(http, 'post').and.returnValue(of(mockResponse));
        service.post(payload).subscribe(spy)
            
        expect(spy).toHaveBeenCalledWith(mockResponse);
        expect(http.post).toHaveBeenCalledWith(service.url, payload, service.httpOptions);
    });


});
