import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';
import { CardsComponent } from './pages/cards/cards.component';


const routes: Routes = [
    {
        path: "",
        component: UsersComponent
    },
    {
        path: "users/create",
        component: UserCreateComponent
    },
    {
        path: "cards",
        component: CardsComponent
    },
    {
        path: "cards/create",
        component: CardCreateComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }