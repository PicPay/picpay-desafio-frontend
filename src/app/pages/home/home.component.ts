import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { IApi } from 'src/app/interfaces/api.interface';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { ICard } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: IApi, useClass: ApiService },]
})
export class HomeComponent implements OnInit, OnDestroy {
  usersData = {
    isLoading:true,
    error:null,
    data:null
  }

  cards:ICard[] = [
    {
      card_number: 1111111111111111,
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: 4111111111111234,
      cvv: 123,
      expiry_date: '01/20',
    },
  ]

  selectedUser:IUser;
  getUsersSubscription:Subscription;
  pagamentoComSucesso:boolean = null;

  constructor(private api:IApi) { }

  ngOnInit() {
    this.refreshUsers();
  }

  refreshUsers(){
    this.usersData = {
      isLoading:true,
      error:null,
      data:null
    }
    this.getUsersSubscription = this.api.getUsers().subscribe(
      (data) => {this.usersData.isLoading = false;this.usersData.data = data},
      (error) => {this.usersData.isLoading = false;this.usersData.error = error},);
  }

  ngOnDestroy(): void {
    if(this.getUsersSubscription){this.getUsersSubscription.unsubscribe;}
  }
  
  OnPagar(user:IUser){
    this.selectedUser=user;
  }
  RealizaPagamento(pagamentoInfo:{ user: IUser; card: ICard; valor: number; }){
    const { user, card, valor } = pagamentoInfo;
    this.api.postTransacao({
      ...card,
      destination_user_id:user.id,
      value:valor
    }).subscribe(val => {
      this.pagamentoComSucesso = val.status === "Aprovada";
      this.selectedUser = null;
    }
     ,val => {
       this.pagamentoComSucesso = false;
       this.selectedUser = null;
    })
  }
  Close(){
    this.selectedUser = null;
    this.pagamentoComSucesso = null;
  }
}
