import { NgModule  } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';


const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: '**', redirectTo: 'users' }

];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
