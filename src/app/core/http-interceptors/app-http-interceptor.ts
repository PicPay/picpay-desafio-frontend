import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

// Mock para simular response de um cartão inválido
const INVALID_CARD = {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
};

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        // Apenas para simular o uso do cartão inválido 
        if (hasInvalidCard(req)) {
            const paymentResponse = { status: 'Reprovada', success: false };
            return of(new HttpResponse({ status: 200, body: paymentResponse })).pipe(
                delay(500)
            )
        }

        return next.handle(req).pipe(
            catchError(handleError)
        );
    }
}

function hasInvalidCard(req: HttpRequest<any>) {
    return req.body && (req.body.card_number === INVALID_CARD.card_number);
}

function handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = error.error.message;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
}