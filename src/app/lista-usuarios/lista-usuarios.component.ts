import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: User[];
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
      this.usuarios = r;
    });

  }
  

}
