import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoPagamentoResponse } from '../../models/response/resultado-pagamento-response.model';
import { UsuarioNotificacaoComponent } from './usuario-notificacao.component';

describe('Teste usuario notificacao', () => {
    let component: UsuarioNotificacaoComponent;
    let fixture: ComponentFixture<UsuarioNotificacaoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsuarioNotificacaoComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsuarioNotificacaoComponent);
        component = fixture.componentInstance;
        
        component.resultadoPagamentoResponse = {
            emoji: 'feliz',
            status: 'Aprovada',
            success: true
        } as ResultadoPagamentoResponse;

        fixture.detectChanges();
    });

    it('Deve criar o componente', () => {
        expect(component).toBeTruthy();
    });
});
