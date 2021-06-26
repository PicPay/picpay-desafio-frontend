import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { UsuarioService } from 'src/services/usuario.service';
import { ModalComponent } from 'src/shared/modal/modal.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal: ModalComponent;

  todosUsuarios: User[];
  usuarios: User[];
  usuarioParaPagamento: User;
  loading: boolean = false;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.loading = true;
    this.usuarioService.getUsuarios().subscribe((r) => {
      this.loading = false;
      this.todosUsuarios = r;
      this.usuarios = r;
    });
  }

  handlePagar(usuario: User) {
    this.usuarioParaPagamento = usuario;
    this.modal.toggle();
  }

  getTituloModal() {
    if (this.usuarioParaPagamento) {
      return 'Pagamento para <span class="highlight">' + this.usuarioParaPagamento.name + '</span>';
    }
  }

  handlePagamentoFinalizado() {
    this.usuarioParaPagamento = null;
    this.modal.close();
  }

  handlePesquisa(termo: string) {
    this.usuarios = this.todosUsuarios;
    console.log(termo);
    if (termo) {
      this.usuarios = this.todosUsuarios.filter(user => {
        return user.name.toUpperCase().indexOf(termo.toUpperCase()) > 0 || 
               user.username.toUpperCase().indexOf(termo.toUpperCase()) > 0
      })
    }
  }
  

}
