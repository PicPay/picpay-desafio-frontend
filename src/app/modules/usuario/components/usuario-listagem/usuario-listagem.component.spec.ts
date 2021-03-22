import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioResponse } from '../../models/response/usuario-response.model';
import { UsuarioListagemComponent } from './usuario-listagem.component';

const usuarioMock = {
    id: 1,
    name: 'usuario teste',
    username: '@usuarioteste'
} as UsuarioResponse;

describe('UsuarioListagemComponent', () => {
    
    let component: UsuarioListagemComponent;
    let fixture: ComponentFixture<UsuarioListagemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsuarioListagemComponent
            ]
        });

        fixture = TestBed.createComponent(UsuarioListagemComponent);
        component = fixture.componentInstance;
    }));

    it('Deve criar o componente', () => {
        expect(component).toBeTruthy();
    });
    
    it('Deve emitir um evento com dados do usuario a ser pago', () => {
        spyOn(component.pagarUsuario, 'emit');

        component.onPagarUsuario(usuarioMock);
        fixture.detectChanges();

        expect(component.pagarUsuario.emit).toHaveBeenCalledWith(usuarioMock);
    });
});
