import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private userService: UserService, 
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      username: [null, Validators.required]
    })
  }

  createNewUser(): void {
    this.userService.showMessage('Usuário cadastrado com sucesso!')
    this.router.navigate([''])
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
