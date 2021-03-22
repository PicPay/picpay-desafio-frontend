import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'pagamentos', component: PagamentoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /* O método é chamado forRoot()porque você configura o roteador no nível raiz do aplicativo. O forRoot()método fornece os provedores de serviço e as diretivas necessárias para o roteamento e executa a navegação inicial com base na URL do navegador atual.*/
  exports: [RouterModule]
})
export class AppRoutingModule { }