import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { PayModalComponent } from './pay-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PayUserService } from 'src/app/services/pay-users.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { PayUser } from '../pay-users/pay-user/pay-user.model';
import { TransactionPayLoad } from 'src/app/models/TransactionPayLoad.model';
import { CurrencyFormatPipe } from 'src/app/pipes/currency-format.pipe';

describe('PayModalComponent', () => {
    let component: PayModalComponent;
    let fixture: ComponentFixture<PayModalComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PayModalComponent, CurrencyFormatPipe],
            imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                PayUserService,
                BsModalService,
                ComponentLoaderFactory,
                PositioningService,
                HttpTestingController,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PayModalComponent);
        component = fixture.componentInstance;
        let user: PayUser = new PayUser(1, 'Rafa', 'https://meusanimais.com.br/wp-content/uploads/2018/04/lontras.jpg', 'rafahs');
        component.message = 'Com Sucesso';
        component.userModal = user;
        component.payForm.value.valueSend = 3;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('select credit cards', () => {
        const el = fixture.debugElement.nativeElement;
        expect(el.querySelector('.cards select').textContent).toContain('Cartão com final 1111 Cartão com final 1234');
    })

    it('request to backend payTransaction',
        inject([PayUserService], (PayUserService: PayUserService) => {

            const payload: TransactionPayLoad = new TransactionPayLoad(
                15, //value
                1, //userID
                '1111111111111111', //cardNumber
                789, //cvv
                '01/18', //expityDate
            );

            //act
            //assert
            expect(PayUserService.postSendPayment(payload)
                .subscribe(
                    (process) => {
                        console.log(process)
                    }
                )).toBeTruthy();
        }))
});
