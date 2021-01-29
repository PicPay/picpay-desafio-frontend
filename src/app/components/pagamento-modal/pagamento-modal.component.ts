import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-pagamento-modal',
  templateUrl: './pagamento-modal.component.html',
  styleUrls: ['./pagamento-modal.component.scss']
})
export class PagamentoModalComponent implements OnInit {

  @Input() user:IUser;
  @Output() OnPagar = new EventEmitter<{user:IUser,card:any}>();
  valor:Number = 15;

  constructor() { }

  ngOnInit() {
  }
  onPagar(){
    console.log(this.valor);
    this.OnPagar.next({user:this.user,card:"aaaa"})
  }
  changeValor(newValor){
    this.valor = newValor.replace(/\D/g, "")/100
  }
}
