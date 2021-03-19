import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: 'usuario',
        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
    },
    {
        path: '**',
        redirectTo: 'usuario',
        pathMatch: 'full'
    }
]