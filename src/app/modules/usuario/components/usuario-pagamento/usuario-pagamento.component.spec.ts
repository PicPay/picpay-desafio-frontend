import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { UsuarioPagamentoComponent } from './usuario-pagamento.component';

describe('UsuarioPagamentoComponent', () => {

    let component: UsuarioPagamentoComponent;
    let fixture: ComponentFixture<UsuarioPagamentoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CurrencyMaskModule,
            ],
            declarations: [
                UsuarioPagamentoComponent
            ]
        });

        fixture = TestBed.createComponent(UsuarioPagamentoComponent);
        component = fixture.componentInstance;
    }));

    it('Deve criar o componente', () => {
        expect(component).toBeTruthy();
    });
});
