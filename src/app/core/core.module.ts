import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [],
  providers: [UserService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
