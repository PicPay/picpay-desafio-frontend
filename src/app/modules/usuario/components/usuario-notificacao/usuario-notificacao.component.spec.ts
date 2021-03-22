import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioNotificacaoComponent } from './usuario-notificacao.component';

describe('UsuarioNotificacaoComponent', () => {
    
    let component: UsuarioNotificacaoComponent;
    let fixture: ComponentFixture<UsuarioNotificacaoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsuarioNotificacaoComponent
            ]
        });

        fixture = TestBed.createComponent(UsuarioNotificacaoComponent);
        component = fixture.componentInstance;
    }));

    it('Deve criar o componente', () => {
        expect(component).toBeTruthy();
    });

        
    it('Deve emitir um evento para fechar modal de notificacao', () => {
        spyOn(component.fecharNotificacao, 'emit');
        component.onFecharNotificacao();
        
        expect(component.fecharNotificacao.emit).toHaveBeenCalled();
    });
});
