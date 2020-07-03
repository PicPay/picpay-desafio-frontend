import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUsersUsecase } from './interface';
import { UsersUsecaseService } from './usecases';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IUsersUsecase, useClass: UsersUsecaseService }
  ]
})
export class CoreModule { }
