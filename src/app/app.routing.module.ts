import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }