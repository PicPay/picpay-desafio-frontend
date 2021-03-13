import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './views/users/users.component';
import { CardsComponent } from './views/cards/cards.component';


const routes: Routes = [
    {
        path: "",
        component: UsersComponent
    },
    {
        path: "cards",
        component: CardsComponent
    },
    {
        path: "users/create",
        component: UserCreateComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }