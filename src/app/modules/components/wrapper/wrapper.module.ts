import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';


import { ListUsersModule } from '../list-users';

@NgModule({
  declarations: [
    WrapperComponent,
  ], 
  exports: [
    WrapperComponent
  ],
  imports: [
    ListUsersModule,
  ],
  providers: [],
})

export class WrapperModule { }