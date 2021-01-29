import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { ICard } from 'src/app/interfaces/card.interface';


@Component({
  selector: 'app-pagamento-modal',
  templateUrl: './pagamento-modal.component.html',
  styleUrls: ['./pagamento-modal.component.scss']
})
export class PagamentoModalComponent implements OnInit {

  @Input() user:IUser;
  @Input() cards:ICard[];
  @Output() OnPagar = new EventEmitter<{user:IUser,card:ICard,valor:number}>();
  valor:number;
  card:ICard;
  constructor() { }

  ngOnInit() {
    this.card = this.cards[0];
  }
  onPagar(){
    this.OnPagar.next({user:this.user,card:this.card,valor:this.valor})
  }

  changeCard(newCard){
    this.card = newCard;
  }

  changeValor(newValor){
    this.valor = newValor.replace(/\D/g, "")/100
  }
}
