import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IUsersRepository } from '../core/interface/repositories/iusers-repository';
import { UsersRepositoryService } from './repositories/users-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: IUsersRepository, useClass: UsersRepositoryService }
  ]
})
export class DataModule { }
