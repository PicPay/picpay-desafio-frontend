import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routeList: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routeList, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
