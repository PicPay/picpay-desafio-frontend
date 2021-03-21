import { CommonModule } from "@angular/common";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { UsuarioListagemComponent } from "../../components/usuario-listagem/usuario-listagem.component";
import { UsuarioNotificacaoComponent } from "../../components/usuario-notificacao/usuario-notificacao.component";
import { UsuarioPagamentoComponent } from "../../components/usuario-pagamento/usuario-pagamento.component";
import { Cartao } from "../../models/cartao.model";
import { ResultadoPagamentoResponse } from "../../models/response/resultado-pagamento-response.model";
import { UsuarioResponse } from "../../models/response/usuario-response.model";
import { CartaoService } from "../../services/cartao.service";
import { PagamentoService } from "../../services/pagamento.service";
import { UsuarioService } from "../../services/usuario.service";
import { UsuarioComponent } from "./usuario.component";

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

const resultadoEsperadoMock = { 
    emoji: 'feliz',  
    status: 'Aprovada',
    success: true
} as ResultadoPagamentoResponse;

let usuarioSelecionadoMock = {
    id: 1,
    username: 'Usuario teste'
} as UsuarioResponse;

describe('Teste Usuario Component', () => {

    let component: UsuarioComponent;
    let fixture: ComponentFixture<UsuarioComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsuarioComponent,
                UsuarioPagamentoComponent,
                UsuarioListagemComponent,
                UsuarioNotificacaoComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                CurrencyMaskModule,
                RouterTestingModule,
                HttpClientTestingModule
            ],
              providers: [
                UsuarioService,
                CartaoService,
                PagamentoService
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UsuarioComponent);
        component = fixture.componentInstance;

        component.cartoes = CARTOES_MOCK;
        component.resultadoPagamentoResponse = resultadoEsperadoMock;

        fixture.detectChanges();
      });

    it('Deve criar o componente', () => {
        expect(component).toBeTruthy();
    });

    it('Deve fechar modal notificacao', () => {
        component.onFecharNotificacao();
        expect(component.abrirNotificacao).toBe(false);
    });

    it('Deve abrir modal pagamento', () => {
        component.onAbrirModal();
        expect(component.abrirModal).toBe(true);
    });

    it('Deve adicionar usuario selecionado para pagamento', () => {
        component.onPagarUsuario(usuarioSelecionadoMock);

        expect(component.pagamento.destination_user_id).toEqual(usuarioSelecionadoMock.id);
        expect(component.nomeUsuario).toEqual(usuarioSelecionadoMock.username);
    });

    it('Deve adicionar cartao selecionado para pagamento', () => {
        const cartaoSelecionado = CARTOES_MOCK[0];
        component.onSelecionarCartao(cartaoSelecionado.card_number);

        expect(component.pagamento.card_number).toEqual(cartaoSelecionado.card_number);
        expect(component.pagamento.cvv).toEqual(cartaoSelecionado.cvv);
        expect(component.pagamento.expiry_date).toEqual(cartaoSelecionado.expiry_date);
    });

    it('Deve obter lista de cartoes', () => {
        component.obterListaDeCartoes();
        expect(component.cartoes.length).toBe(2);
    });

    it('Deve efetuar pagamento', () => {

        const cartaoSelecionado = component.cartoes[0];

        component.onPagarUsuario(usuarioSelecionadoMock);
        component.onSelecionarCartao(cartaoSelecionado.card_number);
        component.pagamento.value = 1500.00;

        component.onEfetuarPagamento();

        expect(component.resultadoPagamentoResponse).toEqual(resultadoEsperadoMock);
    });
})