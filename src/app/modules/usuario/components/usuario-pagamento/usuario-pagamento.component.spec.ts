import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { Cartao } from '../../models/cartao.model';
import { DisplayMessage } from '../../models/generico/generic-form-validation';
import { Pagamento } from '../../models/pagamento.model';
import { UsuarioPagamentoComponent } from './usuario-pagamento.component';

export const CARTOES_MOCK: Array<Cartao> = [
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

describe('Teste usuario pagamento', () => {
    let component: UsuarioPagamentoComponent;
    let fixture: ComponentFixture<UsuarioPagamentoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CurrencyMaskModule,
                RouterTestingModule
            ],
            declarations: [
                UsuarioPagamentoComponent
            ]
        }).compileComponents();
    }));

    beforeEach(inject([FormBuilder], (formBuilder: FormBuilder) => {
        fixture = TestBed.createComponent(UsuarioPagamentoComponent);
        component = fixture.componentInstance;
        
        component.displayMessage = {} as DisplayMessage;
        component.cartoes = CARTOES_MOCK;
        component.nomeUsuario = 'Usuario teste';
        component.pagamento = new Pagamento();
        component.formulario = formBuilder.group({
          value:  ['', Validators.required],
          card_number: ['', Validators.required]
        });

        fixture.detectChanges();
    }));

    it('Deve criar o componente', () => {
        expect(component).toBeTruthy();
    });
});
