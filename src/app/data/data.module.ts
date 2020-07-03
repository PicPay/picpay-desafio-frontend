import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRepositoryService, TransactionRepositoryService } from './repositories';
import { IUsersRepository, ITransactionRepository } from '../core/interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: IUsersRepository, useClass: UsersRepositoryService },
    { provide: ITransactionRepository, useClass: TransactionRepositoryService }
  ]
})
export class DataModule { }
