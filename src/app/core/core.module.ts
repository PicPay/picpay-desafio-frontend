import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUsersUsecase, ITransactionUsecase } from './interface';
import { UsersUsecaseService, TransactionUsecaseService } from './usecases';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IUsersUsecase, useClass: UsersUsecaseService },
    { provide: ITransactionUsecase, useClass: TransactionUsecaseService },
  ]
})
export class CoreModule { }
