import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/users/user-list/user-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }